(() => {
const prefersFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

        const fxCanvas = document.createElement("canvas");
        fxCanvas.className = "target-cursor-canvas";
        fxCanvas.id = "target-cursor-canvas";
        fxCanvas.setAttribute("aria-hidden", "true");
        document.body.appendChild(fxCanvas);

        const fxCtx = fxCanvas.getContext("2d");
        let fxFrameId = null;
        let pointerVisible = prefersFinePointer;
        let rawX = window.innerWidth / 2;
        let rawY = window.innerHeight / 2;
        let displayX = rawX;
        let displayY = rawY;
        let prevRawX = rawX;
        let prevRawY = rawY;
        let velocityX = 0;
        let velocityY = 0;
        let isOverTarget = false;
        let lockProgress = 0;
        let screenFlash = 0;
        let muzzleFlashes = [];
        let sparks = [];

        const HUD_AMBER = "rgba(255, 154, 46, 1)";
        const HUD_AMBER_DIM = "rgba(255, 154, 46, 0.45)";
        const HUD_AMBER_FAINT = "rgba(255, 154, 46, 0.16)";
        const LOCK_RED = "rgba(255, 59, 46, 1)";
        const LOCK_RED_DIM = "rgba(255, 59, 46, 0.55)";

        if (prefersFinePointer) {
            document.documentElement.classList.add("target-cursor-active");
        }

        function resizeFxCanvas() {
            const dpr = window.devicePixelRatio || 1;
            fxCanvas.width = Math.floor(window.innerWidth * dpr);
            fxCanvas.height = Math.floor(window.innerHeight * dpr);
            fxCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function isInteractiveTarget(element) {
            if (!element || element === document.documentElement || element === document.body) {
                return false;
            }
            return Boolean(element.closest(
                "a, button, input, select, textarea, label, [role='button'], .lang-card, .filter-chip, .modal-close-btn, .copy-btn, .tab-btn, .beginner-pill, .beginner-step-btn"
            ));
        }

        function shouldTriggerFireEffect(element) {
            if (!element) return false;
            if (element.id === "details-overlay") return true;
            return isInteractiveTarget(element);
        }

        function playShotFeedback(event) {
            triggerMuzzleFlash(event.clientX, event.clientY);

            const card = event.target.closest(".lang-card");
            if (card) {
                card.classList.remove("shot-hit");
                void card.offsetWidth;
                card.classList.add("shot-hit");
            }
        }

        document.addEventListener("click", (event) => {
            if (!shouldTriggerFireEffect(event.target)) return;
            playShotFeedback(event);
        }, true);

        function strokeLine(ctx2d, x1, y1, x2, y2) {
            ctx2d.beginPath();
            ctx2d.moveTo(x1, y1);
            ctx2d.lineTo(x2, y2);
            ctx2d.stroke();
        }

        function drawBracket(ctx2d, x, y, size, arm, color, lineWidth) {
            ctx2d.strokeStyle = color;
            ctx2d.lineWidth = lineWidth;
            ctx2d.lineCap = "square";
            strokeLine(ctx2d, x - size, y - size + arm, x - size, y - size);
            strokeLine(ctx2d, x - size, y - size, x - size + arm, y - size);
            strokeLine(ctx2d, x + size - arm, y - size, x + size, y - size);
            strokeLine(ctx2d, x + size, y - size, x + size, y - size + arm);
            strokeLine(ctx2d, x + size, y + size - arm, x + size, y + size);
            strokeLine(ctx2d, x + size - arm, y + size, x + size, y + size);
            strokeLine(ctx2d, x - size, y + size, x - size, y + size - arm);
            strokeLine(ctx2d, x - size, y + size - arm, x - size + arm, y + size);
        }

        function triggerMuzzleFlash(x, y) {
            const now = performance.now();
            muzzleFlashes.push({ x, y, born: now, seed: Math.random() * Math.PI * 2 });
            screenFlash = 1;

            for (let i = 0; i < 22; i += 1) {
                const angle = Math.random() * Math.PI * 2;
                const speed = 1.5 + Math.random() * 9;
                sparks.push({
                    x,
                    y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    life: 0.75 + Math.random() * 0.25,
                    decay: 0.025 + Math.random() * 0.035,
                    size: 1 + Math.random() * 2.5,
                    hot: Math.random() > 0.35
                });
            }
        }

        window.triggerMuzzleFlash = triggerMuzzleFlash;

        function drawMuzzleEffects(now, width, height) {
            if (screenFlash > 0.01) {
                fxCtx.fillStyle = `rgba(255, 110, 30, ${screenFlash * 0.14})`;
                fxCtx.fillRect(0, 0, width, height);
                screenFlash *= 0.78;
            }

            muzzleFlashes = muzzleFlashes.filter((flash) => now - flash.born < 160);
            for (const flash of muzzleFlashes) {
                const age = (now - flash.born) / 160;
                const alpha = 1 - age;
                const size = 6 + (1 - age) * 22;

                const burst = fxCtx.createRadialGradient(flash.x, flash.y, 0, flash.x, flash.y, size);
                burst.addColorStop(0, `rgba(255, 255, 230, ${alpha})`);
                burst.addColorStop(0.25, `rgba(255, 210, 70, ${alpha * 0.95})`);
                burst.addColorStop(0.55, `rgba(255, 90, 20, ${alpha * 0.65})`);
                burst.addColorStop(1, "rgba(180, 30, 0, 0)");
                fxCtx.fillStyle = burst;
                fxCtx.beginPath();
                fxCtx.arc(flash.x, flash.y, size, 0, Math.PI * 2);
                fxCtx.fill();

                for (let tongue = 0; tongue < 6; tongue += 1) {
                    const angle = flash.seed + tongue * (Math.PI / 3) + age * 2;
                    const len = size * (1.1 + tongue * 0.08) * (1 - age * 0.5);
                    const tipX = flash.x + Math.cos(angle) * len;
                    const tipY = flash.y + Math.sin(angle) * len;
                    const midX = flash.x + Math.cos(angle) * len * 0.45;
                    const midY = flash.y + Math.sin(angle) * len * 0.45;

                    fxCtx.strokeStyle = `rgba(255, ${120 + tongue * 15}, 30, ${alpha * 0.85})`;
                    fxCtx.lineWidth = 2.5 - age * 1.5;
                    fxCtx.lineCap = "round";
                    strokeLine(fxCtx, flash.x, flash.y, midX, midY);
                    strokeLine(fxCtx, midX, midY, tipX, tipY);
                }

                fxCtx.strokeStyle = `rgba(255, 200, 100, ${alpha * 0.5})`;
                fxCtx.lineWidth = 1;
                fxCtx.beginPath();
                fxCtx.moveTo(flash.x - size * 0.9, flash.y);
                fxCtx.lineTo(flash.x + size * 0.9, flash.y);
                fxCtx.moveTo(flash.x, flash.y - size * 0.9);
                fxCtx.lineTo(flash.x, flash.y + size * 0.9);
                fxCtx.stroke();
            }

            sparks = sparks.filter((spark) => spark.life > 0);
            for (const spark of sparks) {
                spark.x += spark.vx;
                spark.y += spark.vy;
                spark.vy += 0.12;
                spark.vx *= 0.98;
                spark.life -= spark.decay;

                const glow = spark.hot ? 220 : 140;
                fxCtx.fillStyle = `rgba(255, ${glow}, 40, ${spark.life})`;
                fxCtx.shadowBlur = 4;
                fxCtx.shadowColor = `rgba(255, 120, 30, ${spark.life * 0.6})`;
                fxCtx.fillRect(spark.x, spark.y, spark.size, spark.size);
            }
            fxCtx.shadowBlur = 0;
        }

        function drawTargetReticle(now, time) {
            displayX += (rawX - displayX) * 0.42;
            displayY += (rawY - displayY) * 0.42;

            const speed = Math.hypot(velocityX, velocityY);
            const lockTarget = isOverTarget ? 1 : 0;
            lockProgress += (lockTarget - lockProgress) * 0.14;

            const primary = lockProgress > 0.35 ? LOCK_RED : HUD_AMBER;
            const secondary = lockProgress > 0.35 ? LOCK_RED_DIM : HUD_AMBER_DIM;
            const faint = lockProgress > 0.35 ? "rgba(255, 59, 46, 0.18)" : HUD_AMBER_FAINT;

            const breathe = 1 + Math.sin(time * 2.4) * 0.015 * (1 - Math.min(speed / 18, 1));
            const bracketSize = (15 + lockProgress * 2.5) * breathe;
            const bracketArm = 5 + lockProgress * 1.2;
            const ringRadius = 11 + Math.sin(time * 1.6) * 0.4;
            const rotation = time * 0.55 + speed * 0.015;

            fxCtx.save();
            fxCtx.translate(displayX, displayY);
            fxCtx.shadowBlur = 6;
            fxCtx.shadowColor = lockProgress > 0.35 ? "rgba(255, 59, 46, 0.4)" : "rgba(255, 154, 46, 0.3)";

            drawBracket(fxCtx, 0, 0, bracketSize, bracketArm, primary, 1.1);

            fxCtx.strokeStyle = secondary;
            fxCtx.lineWidth = 0.8;
            fxCtx.beginPath();
            fxCtx.arc(0, 0, ringRadius, 0, Math.PI * 2);
            fxCtx.stroke();

            fxCtx.save();
            fxCtx.rotate(rotation);
            fxCtx.setLineDash([2, 4]);
            fxCtx.strokeStyle = faint;
            fxCtx.lineWidth = 0.6;
            fxCtx.beginPath();
            fxCtx.arc(0, 0, ringRadius + 4, 0, Math.PI * 2);
            fxCtx.stroke();
            fxCtx.setLineDash([]);

            for (let tick = 0; tick < 24; tick += 1) {
                const angle = (tick / 24) * Math.PI * 2;
                const major = tick % 3 === 0;
                const inner = ringRadius + 4 + (major ? 0 : 1.5);
                const outer = ringRadius + 4 + (major ? 3.5 : 2);
                fxCtx.strokeStyle = major ? secondary : faint;
                fxCtx.lineWidth = major ? 0.8 : 0.5;
                strokeLine(
                    fxCtx,
                    Math.cos(angle) * inner,
                    Math.sin(angle) * inner,
                    Math.cos(angle) * outer,
                    Math.sin(angle) * outer
                );
            }
            fxCtx.restore();

            const gap = 3;
            const armLength = 8;
            const tickStep = 2.5;
            fxCtx.strokeStyle = primary;
            fxCtx.lineWidth = 1;
            fxCtx.lineCap = "round";

            strokeLine(fxCtx, -(gap + armLength), 0, -gap, 0);
            strokeLine(fxCtx, gap, 0, gap + armLength, 0);
            strokeLine(fxCtx, 0, -(gap + armLength), 0, -gap);
            strokeLine(fxCtx, 0, gap, 0, gap + armLength);

            fxCtx.strokeStyle = secondary;
            fxCtx.lineWidth = 0.6;
            for (let tick = 1; tick <= 2; tick += 1) {
                const offset = gap + tick * tickStep;
                strokeLine(fxCtx, -offset, -1.8, -offset, 1.8);
                strokeLine(fxCtx, offset, -1.8, offset, 1.8);
                strokeLine(fxCtx, -1.8, -offset, 1.8, -offset);
                strokeLine(fxCtx, -1.8, offset, 1.8, offset);
            }

            fxCtx.fillStyle = primary;
            fxCtx.beginPath();
            fxCtx.arc(0, 0, lockProgress > 0.5 ? 1.5 : 1.1, 0, Math.PI * 2);
            fxCtx.fill();

            if (speed > 2.5) {
                const leadScale = Math.min(speed * 0.28, 14);
                const leadX = (velocityX / speed) * leadScale;
                const leadY = (velocityY / speed) * leadScale;
                fxCtx.strokeStyle = secondary;
                fxCtx.lineWidth = 0.7;
                strokeLine(fxCtx, 0, 0, leadX, leadY);
            }

            if (lockProgress > 0.55) {
                fxCtx.font = "600 7px 'Fira Code', monospace";
                fxCtx.textAlign = "center";
                fxCtx.fillStyle = `rgba(255, 59, 46, ${0.55 + lockProgress * 0.35})`;
                fxCtx.fillText("FOCUS", 0, -bracketSize - 7);
            }

            fxCtx.restore();
        }

        function drawFxFrame() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const now = performance.now();
            const time = now * 0.001;

            fxCtx.clearRect(0, 0, width, height);
            drawMuzzleEffects(now, width, height);

            if (prefersFinePointer && pointerVisible) {
                drawTargetReticle(now, time);
            }

            fxFrameId = requestAnimationFrame(drawFxFrame);
        }

        resizeFxCanvas();
        window.addEventListener("resize", resizeFxCanvas);

        if (prefersFinePointer) {
            window.addEventListener("pointermove", (event) => {
                velocityX = event.clientX - prevRawX;
                velocityY = event.clientY - prevRawY;
                prevRawX = event.clientX;
                prevRawY = event.clientY;
                rawX = event.clientX;
                rawY = event.clientY;
                pointerVisible = true;
                isOverTarget = isInteractiveTarget(event.target);
            });

            window.addEventListener("pointerleave", () => {
                pointerVisible = false;
            });

            window.addEventListener("pointerenter", () => {
                pointerVisible = true;
            });
        }

        fxFrameId = requestAnimationFrame(drawFxFrame);
})();
