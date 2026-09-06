// Language Database
        const languages = [
            {
                id: "python",
                name: "Python",
                year: 1991,
                creator: "Guido van Rossum",
                shortDesc: "High-level, human-readable language designed for rapid prototyping, data science, web services, and automation.",
                fullDesc: "Python is a multi-paradigm, highly dynamic language optimized for readability and developer ergonomics. Known as a 'batteries-included' programming environment, Python includes robust built-in support for everything from basic networking to complex data structures, allowing developer speed to match project scaling requirements.",
                accentColor: "#3776AB",
                accentGlow: "rgba(55, 118, 171, 0.2)",
                accentLight: "#4b8bbe",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#3776AB" d="M12 2c-5.523 0-5 2.033-5 4h5v1H7c-2.485 0-5 .784-5 4v5c0 2.21 2.239 3 5 3h1.5v-1.5c0-1.38 1.12-2.5 2.5-2.5h5c1.38 0 2.5 1.12 2.5 2.5V20h1c2.761 0 5-.79 5-3v-5c0-3.216-2.515-4-5-4h-5V7c0-1.967.523-5-5-5zm-3 2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm6 12.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>`,
                categories: ["data-science", "web", "interpreted", "object-oriented"],
                features: [
                    "Indentation-based structural blocks forcing beautiful code layouts.",
                    "Vast developer ecosystem backed by massive scientific computing resources.",
                    "Dynamic type binding allowing rapid development and code modifications.",
                    "Support for multiple paradigms, including object-oriented, imperative, and functional."
                ],
                codeSnippet: `<span class="keyword">def</span> <span class="function">calculate_factorial</span>(n: <span class="type">int</span>) -&gt; <span class="type">int</span>:
    <span class="comment"># Compute factorial using recursion with a guard clause</span>
    <span class="keyword">if</span> n &lt; <span class="number">0</span>:
        <span class="keyword">raise</span> <span class="type">ValueError</span>(<span class="string">"Factorial undefined for negative numbers"</span>)
    <span class="keyword">if</span> n &lt;= <span class="number">1</span>:
        <span class="keyword">return</span> <span class="number">1</span>
    <span class="keyword">return</span> n * <span class="function">calculate_factorial</span>(n - <span class="number">1</span>)

<span class="comment"># Perform quick mapping and filter operations</span>
numbers = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>]
squared_odds = [n**<span class="number">2</span> <span class="keyword">for</span> n <span class="keyword">in</span> numbers <span class="keyword">if</span> n % <span class="number">2</span> != <span class="number">0</span>]
<span class="function">print</span>(<span class="string">f"Factorial of 5: {calculate_factorial(5)}"</span>)
<span class="function">print</span>(<span class="string">f"Squared odd values: {squared_odds}"</span>)`,
                rawCode: `def calculate_factorial(n: int) -> int:
    # Compute factorial using recursion with a guard clause
    if n < 0:
        raise ValueError("Factorial undefined for negative numbers")
    if n <= 1:
        return 1
    return n * calculate_factorial(n - 1)

# Perform quick mapping and filter operations
numbers = [1, 2, 3, 4, 5]
squared_odds = [n**2 for n in numbers if n % 2 != 0]
print(f"Factorial of 5: {calculate_factorial(5)}")
print(f"Squared odd values: {squared_odds}")`,
                packageManager: "pip (PyPI)",
                frameworksWeb: "Django, FastAPI, Flask",
                frameworksData: "NumPy, SciPy, Pandas, PyTorch, TensorFlow",
                primaryRuntime: "CPython, PyPy, Jython",
                pros: [
                    "Extremely easy to read, learn, and write.",
                    "The undisputed leader in AI, ML, and Data Science.",
                    "Large, mature library directory for nearly any problem space."
                ],
                cons: [
                    "Slower runtime performance due to interpreted execution.",
                    "Global Interpreter Lock (GIL) limits multi-threaded efficiency.",
                    "High memory footprint compared to systems languages."
                ],
                specs: {
                    typing: "Dynamic, Strong",
                    memory: "Garbage Collected (Reference Counting + Cycle Detector)",
                    execution: "Interpreted / Bytecode Compile",
                    concurrency: "GIL, Threads, Asyncio, Multiprocessing"
                },
                metrics: [
                    { label: "Performance / Speed", value: 35 },
                    { label: "Ease of Learning", value: 95 },
                    { label: "Community & Ecosystem", value: 98 },
                    { label: "Job Market Demand", value: 92 }
                ]
            },
            {
                id: "javascript",
                name: "JavaScript",
                year: 1995,
                creator: "Brendan Eich",
                shortDesc: "The core language of the World Wide Web, enabling rich interactivity on the client and scalable services via Node.js.",
                fullDesc: "JavaScript is a lightweight, dynamic, prototype-based scripting language. Operating as a core pillar of modern web pages, JS has transitioned to support server execution platforms (Node.js/Bun) and serverless environments, making it a critical full-stack language option.",
                accentColor: "#F7DF1E",
                accentGlow: "rgba(247, 223, 30, 0.15)",
                accentLight: "#fcee75",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#F7DF1E" d="M3 3h18v18H3V3zm14.525 10.978c-.062-.832-.472-1.472-1.348-1.745-.337-.1-.978-.269-1.528-.482-.674-.247-.797-.539-.775-.853.033-.427.46-.73 1.056-.73.618 0 .977.292 1.157.82.045.135.214.225.36.19l1.101-.258a.382.382 0 0 0 .28-.438c-.349-1.427-1.439-2.022-2.854-2.022-1.63 0-2.855.977-2.9 2.416-.056 1.573.989 2.146 2.45 2.685.922.337 1.483.562 1.427 1.157-.056.494-.584.775-1.225.775-.82 0-1.28-.46-1.46-1.123a.362.362 0 0 0-.327-.27l-1.18.158a.379.379 0 0 0-.326.438c.28 1.45 1.348 2.303 3.28 2.303 1.83 0 3.326-.887 3.382-2.584M9 8h1.5v5.5a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 0 1-1.5-1.5V11H8v2.5a.5.5 0 0 0 .5.5h.5V8z"/></svg>`,
                categories: ["web", "interpreted", "object-oriented"],
                features: [
                    "Event-driven asynchronous model using event loops.",
                    "Flexible prototype-based object model instead of traditional classes.",
                    "First-class functions enabling powerful closure structures.",
                    "Universal compatibility across all modern browsers without plugins."
                ],
                codeSnippet: `<span class="comment">// Asynchronous data fetch utilizing async/await syntax</span>
<span class="keyword">async</span> <span class="keyword">function</span> <span class="function">fetchDeveloperProfiles</span>(role) {
    <span class="keyword">const</span> url = \`https://api.example.com/devs?role=\${role}\`;
    <span class="keyword">try</span> {
        <span class="keyword">const</span> response = <span class="keyword">await</span> <span class="function">fetch</span>(url);
        <span class="keyword">if</span> (!response.ok) {
            <span class="keyword">throw</span> <span class="keyword">new</span> <span class="type">Error</span>(\`HTTP Error: \${response.status}\`);
        }
        <span class="keyword">const</span> profiles = <span class="keyword">await</span> response.<span class="function">json</span>();
        <span class="keyword">return</span> profiles.<span class="function">filter</span>(dev =&gt; dev.active);
    } <span class="keyword">catch</span> (err) {
        console.<span class="function">error</span>("Failed retrieving profiles:", err.message);
        <span class="keyword">return</span> [];
    }
}

// Example invocation
fetchDeveloperProfiles("fullstack").then(activeDevs => {
    console.log(\`Active Developers: \${activeDevs.length}\`);
});`,
                rawCode: `// Asynchronous data fetch utilizing async/await syntax
async function fetchDeveloperProfiles(role) {
    const url = \`https://api.example.com/devs?role=\${role}\`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(\`HTTP Error: \${response.status}\`);
        }
        const profiles = await response.json();
        return profiles.filter(dev => dev.active);
    } catch (err) {
        console.error("Failed retrieving profiles:", err.message);
        return [];
    }
}

// Example invocation
fetchDeveloperProfiles("fullstack").then(activeDevs => {
    console.log(\`Active Developers: \${activeDevs.length}\`);
});`,
                packageManager: "npm, yarn, pnpm",
                frameworksWeb: "React, Angular, Vue, Next.js, Express, NestJS",
                frameworksData: "D3.js, Chart.js, TensorFlow.js",
                primaryRuntime: "V8 (Chrome/Node), SpiderMonkey (Firefox), JavaScriptCore (Safari)",
                pros: [
                    "Extremely versatile - executes in browsers, servers, mobile, and IoT.",
                    "Asynchronous design keeps processes responsive under high request volumes.",
                    "Incredible speed on Web browsers due to highly optimized JIT engines."
                ],
                cons: [
                    "Dynamic typing is prone to runtime errors on large applications.",
                    "Lack of standard libraries makes dependencies on outer libraries common.",
                    "Historically confusing language quirks (e.g., prototype binding, type coercion)."
                ],
                specs: {
                    typing: "Dynamic, Weak",
                    memory: "Garbage Collected (Mark and Sweep)",
                    execution: "JIT Compiled / Interpreted",
                    concurrency: "Event Loop (Single-threaded main, Web Workers)"
                },
                metrics: [
                    { label: "Performance / Speed", value: 65 },
                    { label: "Ease of Learning", value: 85 },
                    { label: "Community & Ecosystem", value: 99 },
                    { label: "Job Market Demand", value: 97 }
                ]
            },
            {
                id: "typescript",
                name: "TypeScript",
                year: 2012,
                creator: "Anders Hejlsberg (Microsoft)",
                shortDesc: "A strongly typed superset of JavaScript that compiles down to plain JS, bringing compile-time safety to scale.",
                fullDesc: "TypeScript adds static type definitions to JavaScript, allowing IDE compile-time checking, documentation, and structural validation. Created to combat the complexity of codebases scaling past hundreds of thousands of lines, TS generates output completely clean of typing overhead, usable anywhere JavaScript executes.",
                accentColor: "#3178C6",
                accentGlow: "rgba(49, 120, 198, 0.2)",
                accentLight: "#6ea1da",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#3178C6" d="M3 3h18v18H3V3zm14.475 11.238c-.062-.832-.472-1.472-1.348-1.745-.337-.1-.978-.269-1.528-.482-.674-.247-.797-.539-.775-.853.033-.427.46-.73 1.056-.73.618 0 .977.292 1.157.82.045.135.214.225.36.19l1.101-.258a.382.382 0 0 0 .28-.438c-.349-1.427-1.439-2.022-2.854-2.022-1.63 0-2.855.977-2.9 2.416-.056 1.573.989 2.146 2.45 2.685.922.337 1.483.562 1.427 1.157-.056.494-.584.775-1.225.775-.82 0-1.28-.46-1.46-1.123a.362.362 0 0 0-.327-.27l-1.18.158a.379.379 0 0 0-.326.438c.28 1.45 1.348 2.303 3.28 2.303 1.83 0 3.326-.887 3.382-2.584m-8.975-6.238h-4v2.5h1.25V17H11.5v-6.5H12.75V8z"/></svg>`,
                categories: ["web", "compiled"],
                features: [
                    "Static compilation catches structure bugs before runtime.",
                    "Advanced type capabilities including Union Types, Generics, and Enums.",
                    "Facilitates highly efficient IDE autocomplete and automated refactorings.",
                    "Gradual adoption allows developers to mix TS files directly into JS systems."
                ],
                codeSnippet: `<span class="keyword">interface</span> <span class="type">User</span> {
    id: <span class="type">number</span>;
    name: <span class="type">string</span>;
    role: <span class="string">'admin'</span> | <span class="string">'member'</span>;
    email?: <span class="type">string</span>; <span class="comment">// Optional property</span>
}

<span class="keyword">class</span> <span class="type">UserRegistry</span>&lt;<span class="type">T</span> <span class="keyword">extends</span> <span class="type">User</span>&gt; {
    <span class="keyword">private</span> users: <span class="type">T</span>[] = [];

    <span class="keyword">public</span> <span class="function">registerUser</span>(user: <span class="type">T</span>): <span class="type">void</span> {
        this.users.<span class="function">push</span>(user);
        console.<span class="function">log</span>(\`Registered: \${user.name} (\${user.role})\`);
    }

    <span class="keyword">public</span> <span class="function">getAdmins</span>(): <span class="type">T</span>[] {
        <span class="keyword">return</span> this.users.<span class="function">filter</span>(u =&gt; u.role === 'admin');
    }
}

<span class="keyword">const</span> registry = new <span class="type">UserRegistry</span>&lt;<span class="type">User</span>&gt;();
registry.<span class="function">registerUser</span>({ id: <span class="number">101</span>, name: <span class="string">"Alice"</span>, role: 'admin' });`,
                rawCode: `interface User {
    id: number;
    name: string;
    role: 'admin' | 'member';
    email?: string; // Optional property
}

class UserRegistry<T extends User> {
    private users: T[] = [];

    public registerUser(user: T): void {
        this.users.push(user);
        console.log(\`Registered: \${user.name} (\${user.role})\`);
    }

    public getAdmins(): T[] {
        return this.users.filter(u => u.role === 'admin');
    }
}

const registry = new UserRegistry<User>();
registry.registerUser({ id: 101, name: "Alice", role: 'admin' });`,
                packageManager: "npm, yarn, pnpm",
                frameworksWeb: "Angular, NestJS, SvelteKit, Next.js (built-in TS)",
                frameworksData: "RxJS, Zod",
                primaryRuntime: "Compiles to JavaScript (Runs on NodeJS, V8)",
                pros: [
                    "Eliminates up to 15% of runtime bugs through compile analysis.",
                    "Self-documenting code increases developer team velocity.",
                    "Exceptional code navigation and autocomplete features in IDEs."
                ],
                cons: [
                    "Requires a compilation/transpilation build step.",
                    "Type declarations can become overly verbose or complex to design.",
                    "Strict configs can build friction during dynamic prototyping."
                ],
                specs: {
                    typing: "Static (Structural), Strong",
                    memory: "Same as JavaScript (Garbage Collected)",
                    execution: "Transpiled to JavaScript",
                    concurrency: "Same as JavaScript"
                },
                metrics: [
                    { label: "Performance / Speed", value: 65 },
                    { label: "Ease of Learning", value: 78 },
                    { label: "Community & Ecosystem", value: 95 },
                    { label: "Job Market Demand", value: 96 }
                ]
            },
            {
                id: "rust",
                name: "Rust",
                year: 2015,
                creator: "Graydon Hoare (Mozilla)",
                shortDesc: "A modern systems language focused on performance, safety, and concurrency, without a garbage collector.",
                fullDesc: "Rust is a compiled systems language designed to replace C++ and C in critical infrastructure. Using a compile-time 'Borrow Checker' memory enforcement scheme, Rust achieves high raw speeds while completely preventing segmentation faults and data races at compile time.",
                accentColor: "#CE412B",
                accentGlow: "rgba(206, 65, 43, 0.2)",
                accentLight: "#e27362",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#CE412B" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5v-3H9v3H7v-8h2v3h4v-3h2v8h-2z"/></svg>`,
                categories: ["systems", "compiled"],
                features: [
                    "Compile-time borrow checker ensuring absolute memory safety.",
                    "Zero-cost abstractions mapping structures directly to machine code.",
                    "Fearless concurrency guarantees preventing thread data race conditions.",
                    "First-class compiler tooling with package builder Cargo."
                ],
                codeSnippet: `<span class="keyword">use</span> std::sync::{Arc, Mutex};
<span class="keyword">use</span> std::thread;

<span class="keyword">fn</span> <span class="function">main</span>() {
    <span class="comment">// Create a thread-safe, mutable atomic counter</span>
    <span class="keyword">let</span> counter = Arc::new(Mutex::new(<span class="number">0</span>));
    <span class="keyword">let</span> <span class="keyword">mut</span> handles = vec![];

    <span class="keyword">for</span> _ <span class="keyword">in</span> <span class="number">0</span>..<span class="number">10</span> {
        <span class="keyword">let</span> counter_clone = Arc::clone(&counter);
        <span class="keyword">let</span> handle = thread::spawn(<span class="keyword">move</span> || {
            <span class="comment">// Safely lock mutex block before incrementing</span>
            <span class="keyword">let</span> <span class="keyword">mut</span> num = counter_clone.lock().unwrap();
            *num += <span class="number">1</span>;
        });
        handles.push(handle);
    }

    <span class="keyword">for</span> handle <span class="keyword">in</span> handles {
        handle.join().unwrap();
    }
    
    println!(<span class="string">"Total count: {}"</span>, *counter.lock().unwrap());
}`,
                rawCode: `use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    // Create a thread-safe, mutable atomic counter
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter_clone = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            // Safely lock mutex block before incrementing
            let mut num = counter_clone.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }
    
    println!("Total count: {}", *counter.lock().unwrap());
}`,
                packageManager: "Cargo",
                frameworksWeb: "Actix-Web, Axum, Rocket, Yew (WASM)",
                frameworksData: "Polars, Burn, Tract",
                primaryRuntime: "Native Binary (No runtime, bare-metal compatible)",
                pros: [
                    "Extremely fast execution, matching or exceeding C/C++.",
                    "Complete memory safety without GC pauses.",
                    "Superb compiler diagnostic messages."
                ],
                cons: [
                    "Steep learning curve due to ownership rules.",
                    "Significantly longer compile times compared to Go or C.",
                    "Rigid library patterns can slow down initial prototyping phases."
                ],
                specs: {
                    typing: "Static, Strong, Inferred",
                    memory: "Ownership, Borrowing, Lifetimes (Manual but compiler-verified)",
                    execution: "Ahead-of-Time (AOT) Compiled",
                    concurrency: "Data Race-free Threads, Async (Futures/Tokio)"
                },
                metrics: [
                    { label: "Performance / Speed", value: 98 },
                    { label: "Ease of Learning", value: 40 },
                    { label: "Community & Ecosystem", value: 85 },
                    { label: "Job Market Demand", value: 82 }
                ]
            },
            {
                id: "go",
                name: "Go (Golang)",
                year: 2009,
                creator: "Robert Griesemer, Rob Pike, Ken Thompson (Google)",
                shortDesc: "A statically typed, compiled language engineered by Google for structural simplicity and massive scale concurrency.",
                fullDesc: "Go (Golang) is a compiled language engineered to make modern microservice and system programming simpler. Characterized by incredibly fast compile speeds and clean runtime binaries, Go incorporates high-performance concurrency (goroutines) directly into its language syntax.",
                accentColor: "#00ADD8",
                accentGlow: "rgba(0, 173, 216, 0.2)",
                accentLight: "#48cbed",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#00ADD8" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.2 13h-6.4v-1h6.4v1zm0-3h-6.4v-1h6.4v1zm0-3h-6.4V8h6.4v1z"/></svg>`,
                categories: ["systems", "compiled", "web"],
                features: [
                    "Goroutines providing cheap threads costing only 2KB stack space.",
                    "Channels providing type-safe pipeline structures for concurrent workers.",
                    "Aggressive compiler compile speeds building projects in milliseconds.",
                    "Produces self-contained standalone execution binaries."
                ],
                codeSnippet: `<span class="keyword">package</span> main

<span class="keyword">import</span> (
	<span class="string">"fmt"</span>
	<span class="string">"time"</span>
)

<span class="keyword">func</span> <span class="function">worker</span>(id <span class="type">int</span>, jobs &lt;-<span class="keyword">chan</span> <span class="type">int</span>, results <span class="keyword">chan</span>&lt;- <span class="type">int</span>) {
	<span class="keyword">for</span> j := <span class="keyword">range</span> jobs {
		fmt.Printf("worker:%d started job:%d\\n", id, j)
		time.Sleep(time.Millisecond * <span class="number">100</span>)
		results &lt;- j * <span class="number">2</span>
	}
}

<span class="keyword">func</span> <span class="function">main</span>() {
	jobs := make(<span class="keyword">chan</span> <span class="type">int</span>, <span class="number">100</span>)
	results := make(<span class="keyword">chan</span> <span class="type">int</span>, <span class="number">100</span>)

	<span class="comment">// Start three concurrent workers</span>
	<span class="keyword">for</span> w := <span class="number">1</span>; w &lt;= <span class="number">3</span>; w++ {
		<span class="keyword">go</span> worker(w, jobs, results)
	}

	<span class="keyword">for</span> j := <span class="number">1</span>; j &lt;= <span class="number">5</span>; j++ {
		jobs &lt;- j
	}
	close(jobs)

	<span class="keyword">for</span> a := <span class="number">1</span>; a &lt;= <span class="number">5</span>; a++ {
		fmt.Printf("Result: %d\\n", &lt;-results)
	}
}`,
                rawCode: `package main

import (
	"fmt"
	"time"
)

func worker(id int, jobs <-chan int, results chan<- int) {
	for j := range jobs {
		fmt.Printf("worker:%d started job:%d\\n", id, j)
		time.Sleep(time.Millisecond * 100)
		results <- j * 2
	}
}

func main() {
	jobs := make(chan int, 100)
	results := make(chan int, 100)

	// Start three concurrent workers
	for w := 1; w <= 3; w++ {
		go worker(w, jobs, results)
	}

	for j := 1; j <= 5; j++ {
		jobs <- j
	}
	close(jobs)

	for a := 1; a <= 5; a++ {
		fmt.Printf("Result: %d\\n", <-results)
	}
}`,
                packageManager: "Go Modules",
                frameworksWeb: "Gin, Fiber, Echo",
                frameworksData: "Gonum, GoCV",
                primaryRuntime: "Go Runtime (Compiled, embedded GC/scheduler)",
                pros: [
                    "Extremely simple syntax - only 25 keywords.",
                    "Out-of-the-box support for lightweight concurrency.",
                    "Deploys trivially as a single statically-linked binary."
                ],
                cons: [
                    "Minimalist structure can lead to boilerplate code patterns.",
                    "Ecosystem lacks specialized scientific and deep ML libraries.",
                    "Garbage Collection adds runtime pauses, though highly optimized."
                ],
                specs: {
                    typing: "Static, Strong, Inferred",
                    memory: "Garbage Collected (Low-latency Concurrent Mark-Sweep)",
                    execution: "AOT Compiled",
                    concurrency: "Goroutines (CSP Model) + Channels"
                },
                metrics: [
                    { label: "Performance / Speed", value: 85 },
                    { label: "Ease of Learning", value: 90 },
                    { label: "Community & Ecosystem", value: 88 },
                    { label: "Job Market Demand", value: 90 }
                ]
            },
            {
                id: "cpp",
                name: "C++",
                year: 1985,
                creator: "Bjarne Stroustrup",
                shortDesc: "The industry standard for graphics, games, OS engines, and high-performance low-latency execution.",
                fullDesc: "C++ is an extension of C adding object-oriented, template, and resource-safety mechanisms. Engineered for low-overhead abstractions, C++ exposes raw hardware pointers and hardware capabilities, yielding unparalleled execution speeds widely used in real-time simulators, gaming consoles, and search engine infrastructure.",
                accentColor: "#00599C",
                accentGlow: "rgba(0, 89, 156, 0.2)",
                accentLight: "#3d91cf",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#00599C" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 11h-2v2H9v-2H7v-2h2V9h2v2h2v2zm6 0h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z"/></svg>`,
                categories: ["systems", "compiled", "object-oriented"],
                features: [
                    "RAII (Resource Acquisition Is Initialization) binding scopes to memory.",
                    "Highly powerful template metaprogramming for zero-cost designs.",
                    "Manual hardware manipulation and custom heap allocator configurations.",
                    "Multi-paradigm support including OOP, functional, and generic code."
                ],
                codeSnippet: `<span class="keyword">#include</span> <span class="string">&lt;iostream&gt;</span>
<span class="keyword">#include</span> <span class="string">&lt;memory&gt;</span>

<span class="keyword">class</span> <span class="type">Resource</span> {
<span class="keyword">public</span>:
    <span class="function">Resource</span>() { std::cout &lt;&lt; "Resource acquired\\n"; }
    ~<span class="function">Resource</span>() { std::cout &lt;&lt; "Resource automatically released\\n"; }
    <span class="type">void</span> <span class="function">doWork</span>() { std::cout &lt;&lt; "Doing calculation work\\n"; }
};

<span class="type">int</span> <span class="function">main</span>() {
    {
        <span class="comment">// Smart pointer enforces RAII automatic memory cleanup</span>
        std::unique_ptr&lt;<span class="type">Resource</span>&gt; ptr = std::make_unique&lt;<span class="type">Resource</span>&gt;();
        ptr-&gt;<span class="function">doWork</span>();
    } <span class="comment">// ptr falls out of scope, releasing resource automatically</span>
    
    std::cout &lt;&lt; "Scope ended\\n";
    <span class="keyword">return</span> <span class="number">0</span>;
}`,
                rawCode: `#include <iostream>
#include <memory>

class Resource {
public:
    Resource() { std::cout << "Resource acquired\\n"; }
    ~Resource() { std::cout << "Resource automatically released\\n"; }
    void doWork() { std::cout << "Doing calculation work\\n"; }
};

int main() {
    {
        // Smart pointer enforces RAII automatic memory cleanup
        std::unique_ptr<Resource> ptr = std::make_unique<Resource>();
        ptr->doWork();
    } // ptr falls out of scope, releasing resource automatically
    
    std::cout << "Scope ended\\n";
    return 0;
}`,
                packageManager: "Conan, vcpkg",
                frameworksWeb: "Crow, Drogon, Oat++",
                frameworksData: "TensorFlow C++, OpenCV, Eigen",
                primaryRuntime: "Native Machine Target (No runtime needed)",
                pros: [
                    "Unparalleled execution speeds and absolute hardware control.",
                    "No garbage collection pauses to guarantee real-time predictability.",
                    "Decades of mature compilers and production-tested libraries."
                ],
                cons: [
                    "Manual pointer control is highly prone to buffer overflows/leaks.",
                    "Highly complex syntax with a massive cumulative feature list.",
                    "Slow compile times on large files due to nested headers."
                ],
                specs: {
                    typing: "Static, Strong",
                    memory: "Manual / RAII Smart Pointers (No Garbage Collector)",
                    execution: "AOT Compiled to Machine Code",
                    concurrency: "OS Threads, atomics, C++20 coroutines"
                },
                metrics: [
                    { label: "Performance / Speed", value: 99 },
                    { label: "Ease of Learning", value: 30 },
                    { label: "Community & Ecosystem", value: 92 },
                    { label: "Job Market Demand", value: 88 }
                ]
            },
            {
                id: "java",
                name: "Java",
                year: 1995,
                creator: "James Gosling (Sun Microsystems)",
                shortDesc: "A secure, robust OOP programming standard powering billions of devices and enterprise cloud backends.",
                fullDesc: "Java is an object-oriented, class-based language built around the 'Write Once, Run Anywhere' (WORA) philosophy. Running on top of the Java Virtual Machine (JVM), Java abstracts away underlying OS specifics, making it a favorite for enterprise database servers and Android app systems.",
                accentColor: "#E76F51",
                accentGlow: "rgba(231, 111, 81, 0.2)",
                accentLight: "#ef9a84",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#E76F51" d="M2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm7.5-3.5c-.5 0-.8.3-.8.8v6.4c0 .5.3.8.8.8h5c.5 0 .8-.3.8-.8v-6.4c0-.5-.3-.8-.8-.8h-5z"/></svg>`,
                categories: ["object-oriented", "compiled"],
                features: [
                    "Compiles to universal Java Bytecode executed on any JVM.",
                    "Strict object-oriented model with clear interface enforcement.",
                    "Automatic GC preventing memory leaks while hiding manual allocation.",
                    "Extensive standard SDK covering networks, cryptography, and structures."
                ],
                codeSnippet: `<span class="keyword">import</span> java.util.List;
<span class="keyword">import</span> java.util.stream.Collectors;

<span class="keyword">public</span> <span class="keyword">class</span> <span class="type">StreamProcessor</span> {
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="type">void</span> <span class="function">main</span>(String[] args) {
        List&lt;String&gt; languages = List.of("Java", "Python", "Rust", "Go", "C++");

        // Process elements using declarative stream processing
        List&lt;String&gt; longNames = languages.stream()
            .filter(name -&gt; name.length() &gt; 3)
            .map(String::toUpperCase)
            .collect(Collectors.toList());

        longNames.forEach(System.out::println);
    }
}`,
                rawCode: `import java.util.List;
import java.util.stream.Collectors;

public class StreamProcessor {
    public static void main(String[] args) {
        List<String> languages = List.of("Java", "Python", "Rust", "Go", "C++");

        // Process elements using declarative stream processing
        List<String> longNames = languages.stream()
            .filter(name -> name.length() > 3)
            .map(String::toUpperCase)
            .collect(Collectors.toList());

        longNames.forEach(System.out::println);
    }
}`,
                packageManager: "Maven, Gradle",
                frameworksWeb: "Spring Boot, Quarkus, Micronaut",
                frameworksData: "Apache Spark, Hadoop, Weka",
                primaryRuntime: "Java Virtual Machine (JVM)",
                pros: [
                    "WORA execution model operates identically across OS types.",
                    "Enormous enterprise ecosystem offering long-term stability.",
                    "Strong static checks prevent dynamic type vulnerabilities."
                ],
                cons: [
                    "Highly verbose code requiring boilerplate wrappers.",
                    "High memory footprint compared to native binaries.",
                    "JVM startup time is slower, impacting serverless scaling."
                ],
                specs: {
                    typing: "Static, Strong",
                    memory: "Garbage Collected (G1 GC, ZGC)",
                    execution: "Bytecode Compiled -> JIT Machine Code at runtime",
                    concurrency: "OS Threads, Virtual Threads (Project Loom)"
                },
                metrics: [
                    { label: "Performance / Speed", value: 78 },
                    { label: "Ease of Learning", value: 70 },
                    { label: "Community & Ecosystem", value: 95 },
                    { label: "Job Market Demand", value: 92 }
                ]
            },
            {
                id: "swift",
                name: "Swift",
                year: 2014,
                creator: "Apple Inc.",
                shortDesc: "Apple's modern, safe compiled programming language for iOS, macOS, watchOS, and tvOS apps.",
                fullDesc: "Swift was created by Apple to replace Objective-C. By combining systems performance with scripting clarity, Swift incorporates design features that prevent null-reference issues (Optional binding) and enforce safe state concurrency.",
                accentColor: "#F05138",
                accentGlow: "rgba(240, 81, 56, 0.2)",
                accentLight: "#f48c7c",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#F05138" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.8 11.2c-.4 1.2-1.6 2.4-2.8 2.8-.8.2-2-.2-2.8-.8-.6-.4-1.2-1.2-1.2-1.2s-.6.8-1.2 1.2c-.8.6-2 1-2.8.8-1.2-.4-2.4-1.6-2.8-2.8-.2-.8.2-2 .8-2.8.4-.6 1.2-1.2 1.2-1.2s-.8-.6-1.2-1.2c-.6-.8-1-2-.8-2.8.4-1.2 1.6-2.4 2.8-2.8.8-.2 2 .2 2.8.8.6.4 1.2 1.2 1.2 1.2s.6-.8 1.2-1.2c.8-.6 2-1 2.8-.8 1.2.4 2.4 1.6 2.8 2.8.2.8-.2 2-.8 2.8-.4.6-1.2 1.2-1.2 1.2s.8.6 1.2 1.2c.6.8 1 2 .8 2.8z"/></svg>`,
                categories: ["compiled", "object-oriented"],
                features: [
                    "Optionals enforcing safe checking of nil references at compile-time.",
                    "Automatic Reference Counting (ARC) instead of garbage collection.",
                    "Modern protocol extensions enabling highly composable designs.",
                    "Swift Playgrounds facilitating immediate visual experimentation."
                ],
                codeSnippet: `<span class="comment">// Define model with Swift optional parameter bindings</span>
<span class="keyword">struct</span> <span class="type">Developer</span> {
    <span class="keyword">let</span> name: <span class="type">String</span>
    <span class="keyword">var</span> primaryLanguage: <span class="type">String</span>?
}

<span class="keyword">let</span> devs = [
    <span class="type">Developer</span>(name: "Sarah", primaryLanguage: "Swift"),
    <span class="type">Developer</span>(name: "Alex", primaryLanguage: nil)
]

// Safe conditional binding of potential nil value
for dev in devs {
    if let lang = dev.primaryLanguage {
        print("\\(dev.name) code base language: \\(lang)")
    } else {
        print("\\(dev.name) is multi-discipline")
    }
}`,
                rawCode: `// Define model with Swift optional parameter bindings
struct Developer {
    let name: String
    var primaryLanguage: String?
}

let devs = [
    Developer(name: "Sarah", primaryLanguage: "Swift"),
    Developer(name: "Alex", primaryLanguage: nil)
]

// Safe conditional binding of potential nil value
for dev in devs {
    if let lang = dev.primaryLanguage {
        print("\\(dev.name) code base language: \\(lang)")
    } else {
        print("\\(dev.name) is multi-discipline")
    }
}`,
                packageManager: "Swift Package Manager (SPM), CocoaPods",
                frameworksWeb: "Vapor, Hummingbird",
                frameworksData: "Create ML, TabularData",
                primaryRuntime: "Native target + Swift runtime library",
                pros: [
                    "Extremely safe language syntax virtually eliminating null reference crashes.",
                    "Rapid compile speeds producing high performance code.",
                    "Native seamless interaction with Apple's system API catalog."
                ],
                cons: [
                    "Highly focused on Apple devices; weak support for Linux/Windows servers.",
                    "API design changes frequently between major compiler releases.",
                    "Requires macOS / Xcode to construct target iOS executables."
                ],
                specs: {
                    typing: "Static, Strong, Inferred",
                    memory: "Automatic Reference Counting (ARC) - No GC",
                    execution: "AOT Compiled via LLVM",
                    concurrency: "Async/Await, Actors, Structured Concurrency"
                },
                metrics: [
                    { label: "Performance / Speed", value: 90 },
                    { label: "Ease of Learning", value: 80 },
                    { label: "Community & Ecosystem", value: 78 },
                    { label: "Job Market Demand", value: 85 }
                ]
            },
            {
                id: "haskell",
                name: "Haskell",
                year: 1990,
                creator: "Committee (Simon Peyton Jones, Hudak, etc.)",
                shortDesc: "A purely functional, lazy-evaluated programming language featuring advanced mathematical type constraints.",
                fullDesc: "Haskell is a functional, lazy-evaluated programming language. Featuring algebraic types and mathematically-proven monads, Haskell guarantees zero side effects inside pure execution scopes, preventing hidden state changes.",
                accentColor: "#5E5086",
                accentGlow: "rgba(94, 80, 134, 0.2)",
                accentLight: "#8e80b6",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#5E5086" d="M2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm7-4l-3 4 3 4h2l-3-4 3-4H9zm6 0l-3 4 3 4h2l-3-4 3-4h-2zm-1.5 3h4v2h-4v-2z"/></svg>`,
                categories: ["functional", "compiled"],
                features: [
                    "Pure functional scope guaranteeing zero side effects.",
                    "Lazy evaluation deferring compilation computation until values are requested.",
                    "Hindley-Milner type inference mapping complex signatures.",
                    "Monadic execution blocks separating side-effects like file IO safely."
                ],
                codeSnippet: `<span class="comment">-- Pure recursive QuickSort implementation</span>
quicksort :: (<span class="type">Ord</span> a) =&gt; [a] -&gt; [a]
quicksort [] = []
quicksort (x:xs) =
    <span class="keyword">let</span> smallerSorted = quicksort [a | a &lt;- xs, a &lt;= x]
        biggerSorted  = quicksort [a | a &lt;- xs, a &gt; x]
    <span class="keyword">in</span>  smallerSorted ++ [x] ++ biggerSorted

<span class="comment">-- Lazy list generation of infinite Fibonacci sequence</span>
fibs :: [<span class="type">Integer</span>]
fibs = 0 : 1 : zipWith (+) fibs (tail fibs)

main :: <span class="type">IO</span> ()
main = <span class="keyword">do</span>
    -- Take only the first 10 items of the lazy sequence
    print $ take 10 fibs`,
                rawCode: `-- Pure recursive QuickSort implementation
quicksort :: (Ord a) => [a] -> [a]
quicksort [] = []
quicksort (x:xs) =
    let smallerSorted = quicksort [a | a <- xs, a <= x]
        biggerSorted  = quicksort [a | a <- xs, a > x]
    in  smallerSorted ++ [x] ++ biggerSorted

-- Lazy list generation of infinite Fibonacci sequence
fibs :: [Integer]
fibs = 0 : 1 : zipWith (+) fibs (tail fibs)

main :: IO ()
main = do
    -- Take only the first 10 items of the lazy sequence
    print $ take 10 fibs`,
                packageManager: "Cabal, Stack",
                frameworksWeb: "Yesod, Spock, Servant",
                frameworksData: "HLearn, HMatrix",
                primaryRuntime: "GHC (Glasgow Haskell Compiler) runtime",
                pros: [
                    "Side-effect-free code makes software easy to test.",
                    "Extremely powerful abstraction models express code concisely.",
                    "Lazy evaluation allows generating infinite data structures."
                ],
                cons: [
                    "Steep, academic learning curve based on category theory.",
                    "Debugging lazy evaluation memory profiles is difficult.",
                    "Small enterprise ecosystem compared to mainstream options."
                ],
                specs: {
                    typing: "Static, Strong, Hindley-Milner",
                    memory: "Garbage Collected",
                    execution: "AOT Compiled (via GHC)",
                    concurrency: "Software Transactional Memory (STM), Green Threads"
                },
                metrics: [
                    { label: "Performance / Speed", value: 75 },
                    { label: "Ease of Learning", value: 20 },
                    { label: "Community & Ecosystem", value: 50 },
                    { label: "Job Market Demand", value: 45 }
                ]
            },
            {
                id: "sql",
                name: "SQL",
                year: 1974,
                creator: "Donald D. Chamberlin, Raymond F. Boyce (IBM)",
                shortDesc: "The universal declarative database standard query language used to define and mutate relational data.",
                fullDesc: "SQL (Structured Query Language) is the domain-specific standard for managing relational data tables. Rather than telling engines HOW to fetch bytes, SQL declaratively specifies WHAT data is needed, leaving details to advanced engine optimizers.",
                accentColor: "#00758F",
                accentGlow: "rgba(0, 117, 143, 0.2)",
                accentLight: "#33a2bd",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#00758F" d="M12 2C6.48 2 2 4.02 2 6.5v11c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 3c4.97 0 8 1.57 8 2s-3.03 2-8 2-8-1.57-8-2 3.03-2 8-2zm0 13c-4.97 0-8-1.57-8-2v-2.28c1.9 1.1 4.79 1.78 8 1.78s6.1-0.68 8-1.78V16c0 .43-3.03 2-8 2z"/></svg>`,
                categories: ["data-science", "interpreted"],
                features: [
                    "Declarative structure focusing on query goals over step details.",
                    "Guarantees ACID relational compliance across operations.",
                    "Highly standardized language structure used by SQL Server, Oracle, and MySQL.",
                    "Handles large transaction sets using relational algebraic optimizations."
                ],
                codeSnippet: `<span class="keyword">WITH</span> MonthlySales <span class="keyword">AS</span> (
    <span class="comment">-- Calculate aggregate sales per representative</span>
    <span class="keyword">SELECT</span> 
        rep_id,
        <span class="function">DATE_TRUNC</span>('month', sale_date) <span class="keyword">AS</span> sales_month,
        <span class="function">SUM</span>(amount) <span class="keyword">AS</span> total_revenue
    <span class="keyword">FROM</span> transactions
    <span class="keyword">WHERE</span> status = 'completed'
    <span class="keyword">GROUP</span> <span class="keyword">BY</span> rep_id, <span class="function">DATE_TRUNC</span>('month', sale_date)
)
<span class="comment">-- Rank sales reps dynamically within each month</span>
<span class="keyword">SELECT</span> 
    rep_id,
    sales_month,
    total_revenue,
    <span class="function">DENSE_RANK</span>() <span class="keyword">OVER</span> (
        <span class="keyword">PARTITION BY</span> sales_month 
        <span class="keyword">ORDER BY</span> total_revenue <span class="keyword">DESC</span>
    ) <span class="keyword">AS</span> monthly_rank
<span class="keyword">FROM</span> MonthlySales;`,
                rawCode: `WITH MonthlySales AS (
    -- Calculate aggregate sales per representative
    SELECT 
        rep_id,
        DATE_TRUNC('month', sale_date) AS sales_month,
        SUM(amount) AS total_revenue
    FROM transactions
    WHERE status = 'completed'
    GROUP BY rep_id, DATE_TRUNC('month', sale_date)
)
-- Rank sales reps dynamically within each month
SELECT 
    rep_id,
    sales_month,
    total_revenue,
    DENSE_RANK() OVER (
        PARTITION BY sales_month 
        ORDER BY total_revenue DESC
    ) AS monthly_rank
FROM MonthlySales;`,
                packageManager: "None (Engine modules)",
                frameworksWeb: "Prisma, Sequelize, Hibernate, SQLAlchemy (ORM layers)",
                frameworksData: "dbt (Data Build Tool)",
                primaryRuntime: "RDBMS Engine (PostgreSQL, SQLite, MySQL, BigQuery)",
                pros: [
                    "The absolute standard for enterprise transactional data systems.",
                    "Extremely declarative - engines handle performance indexing.",
                    "Simple, standardized tabular relational storage model."
                ],
                cons: [
                    "Not general purpose - cannot run typical UI applications.",
                    "Complex analytical scripts can be difficult to scale or refactor.",
                    "Inconsistencies between SQL flavors (e.g. Postgres vs Oracle syntax)."
                ],
                specs: {
                    typing: "Static / Strong schema validation",
                    memory: "Managed automatically by database buffer pools",
                    execution: "Compiled to Query Plans inside engine",
                    concurrency: "ACID Transactions, MVCC (Multi-Version Concurrency)"
                },
                metrics: [
                    { label: "Performance / Speed", value: 80 },
                    { label: "Ease of Learning", value: 82 },
                    { label: "Community & Ecosystem", value: 96 },
                    { label: "Job Market Demand", value: 98 }
                ]
            },
            {
                id: "kotlin",
                name: "Kotlin",
                year: 2011,
                creator: "JetBrains",
                shortDesc: "A concise, expressive JVM language fully interoperable with Java  -  the official language for Android development.",
                fullDesc: "Kotlin is a statically typed language designed by JetBrains to run on the JVM while eliminating Java verbosity. It compiles to both JVM bytecode and JavaScript, and with Kotlin/Native it targets native binaries. Google made it the preferred language for Android in 2019.",
                accentColor: "#7F52FF",
                accentGlow: "rgba(127, 82, 255, 0.2)",
                accentLight: "#a988ff",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#7F52FF" d="M3 3h9.5L3 12.5V3zm0 18l9.5-9.5L22 21H3zm10.5-18H22l-9.5 9.5L3 3.5 13.5 3z"/></svg>`,
                categories: ["mobile", "object-oriented", "compiled", "web"],
                features: [
                    "Null safety built into the type system  -  eliminates NullPointerException.",
                    "Coroutines providing lightweight async concurrency without callbacks.",
                    "100% interoperability with existing Java libraries and frameworks.",
                    "Data classes, sealed classes and extension functions reduce boilerplate."
                ],
                codeSnippet: `<span class="keyword">data class</span> <span class="type">User</span>(val id: <span class="type">Int</span>, val name: <span class="type">String</span>, val email: <span class="type">String</span>?)

<span class="keyword">fun</span> <span class="function">fetchActiveUsers</span>(users: <span class="type">List</span>&lt;<span class="type">User</span>&gt;): <span class="type">List</span>&lt;<span class="type">String</span>&gt; {
    <span class="keyword">return</span> users
        .<span class="function">filter</span> { it.email != <span class="keyword">null</span> }
        .<span class="function">map</span> { <span class="string">"\${it.name} &lt;\${it.email}&gt;"</span> }
        .<span class="function">sortedBy</span> { it.name }
}

<span class="keyword">fun</span> <span class="function">main</span>() {
    <span class="keyword">val</span> users = listOf(
        <span class="type">User</span>(<span class="number">1</span>, <span class="string">"Alice"</span>, <span class="string">"alice@dev.io"</span>),
        <span class="type">User</span>(<span class="number">2</span>, <span class="string">"Bob"</span>, <span class="keyword">null</span>),
        <span class="type">User</span>(<span class="number">3</span>, <span class="string">"Carol"</span>, <span class="string">"carol@dev.io"</span>)
    )
    <span class="function">fetchActiveUsers</span>(users).<span class="function">forEach</span> { <span class="function">println</span>(it) }
}`,
                rawCode: `data class User(val id: Int, val name: String, val email: String?)

fun fetchActiveUsers(users: List<User>): List<String> {
    return users
        .filter { it.email != null }
        .map { "\${it.name} <\${it.email}>" }
        .sortedBy { it.name }
}

fun main() {
    val users = listOf(
        User(1, "Alice", "alice@dev.io"),
        User(2, "Bob", null),
        User(3, "Carol", "carol@dev.io")
    )
    fetchActiveUsers(users).forEach { println(it) }
}`,
                packageManager: "Gradle, Maven",
                frameworksWeb: "Ktor, Spring Boot (Kotlin), Exposed",
                frameworksData: "KotlinDL, Multik",
                primaryRuntime: "JVM, Kotlin/Native, Kotlin/JS",
                pros: [
                    "Null-safe type system prevents the most common runtime crash.",
                    "Extremely concise  -  reduces Java code by up to 40%.",
                    "First-class coroutine support for scalable async code."
                ],
                cons: [
                    "Compile times can be slow on large codebases.",
                    "Tooling quality outside JetBrains IDEs varies.",
                    "Smaller community than Java for backend/server contexts."
                ],
                specs: {
                    typing: "Static, Strong, Inferred",
                    memory: "Garbage Collected (JVM GC or ARC on Native)",
                    execution: "JVM Bytecode / Native (via LLVM) / JS",
                    concurrency: "Coroutines, Channels, Flow"
                },
                metrics: [
                    { label: "Performance / Speed", value: 75 },
                    { label: "Ease of Learning", value: 80 },
                    { label: "Community & Ecosystem", value: 86 },
                    { label: "Job Market Demand", value: 88 }
                ]
            },
            {
                id: "ruby",
                name: "Ruby",
                year: 1995,
                creator: "Yukihiro Matsumoto",
                shortDesc: "An elegant, developer-friendly scripting language optimized for programmer happiness and rapid web development.",
                fullDesc: "Ruby is a dynamic, object-oriented language designed around the principle that programming should be enjoyable. Everything is an object, including primitives. Ruby on Rails revolutionized web development in 2004 by introducing convention-over-configuration, making Ruby a dominant web framework language for a decade.",
                accentColor: "#CC342D",
                accentGlow: "rgba(204, 52, 45, 0.2)",
                accentLight: "#e07671",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#CC342D" d="M20.156 11.203L12.8 3.845l-1.415-1.414L2.97 10.847l8.783 8.783 1.415 1.415 7.416-7.416-1.414-1.414.986-.986.414 1.974zM12.8 16.216l-4.95-4.95 4.243-4.242 4.95 4.95-4.243 4.242z"/></svg>`,
                categories: ["web", "interpreted", "object-oriented", "scripting"],
                features: [
                    "Pure object-oriented model  -  even integers and booleans are objects.",
                    "Blocks, procs and lambdas enabling elegant functional-style patterns.",
                    "Rails framework pioneered convention-over-configuration web development.",
                    "Metaprogramming capabilities for DSL creation and runtime class modification."
                ],
                codeSnippet: `<span class="comment"># Elegant data pipeline using Ruby's enumerable methods</span>
<span class="keyword">class</span> <span class="type">ProductCatalog</span>
  <span class="keyword">attr_reader</span> :products

  <span class="keyword">def</span> <span class="function">initialize</span>(products)
    @products = products
  <span class="keyword">end</span>

  <span class="keyword">def</span> <span class="function">premium_names</span>(min_price)
    @products
      .<span class="function">select</span> { |p| p[:price] &gt; min_price }
      .<span class="function">map</span>    { |p| p[:name].<span class="function">upcase</span> }
      .<span class="function">sort</span>
  <span class="keyword">end</span>
<span class="keyword">end</span>

catalog = <span class="type">ProductCatalog</span>.<span class="keyword">new</span>([
  { name: <span class="string">"widget"</span>, price: <span class="number">9.99</span> },
  { name: <span class="string">"gadget"</span>, price: <span class="number">49.99</span> },
  { name: <span class="string">"doohickey"</span>, price: <span class="number">99.99</span> }
])
<span class="function">puts</span> catalog.<span class="function">premium_names</span>(<span class="number">20</span>)`,
                rawCode: `# Elegant data pipeline using Ruby's enumerable methods
class ProductCatalog
  attr_reader :products

  def initialize(products)
    @products = products
  end

  def premium_names(min_price)
    @products
      .select { |p| p[:price] > min_price }
      .map    { |p| p[:name].upcase }
      .sort
  end
end

catalog = ProductCatalog.new([
  { name: "widget",    price: 9.99 },
  { name: "gadget",    price: 49.99 },
  { name: "doohickey", price: 99.99 }
])
puts catalog.premium_names(20)`,
                packageManager: "RubyGems, Bundler",
                frameworksWeb: "Ruby on Rails, Sinatra, Hanami",
                frameworksData: "Daru, NMatrix, SciRuby",
                primaryRuntime: "MRI (CRuby), JRuby, TruffleRuby",
                pros: [
                    "Extremely readable and expressive syntax  -  feels like English.",
                    "Rails makes full-stack web apps buildable in hours.",
                    "Rich metaprogramming enabling powerful DSLs."
                ],
                cons: [
                    "Significantly slower than compiled or JIT languages.",
                    "Global Interpreter Lock limits true multi-threading.",
                    "Declining job market share compared to peak Rails era."
                ],
                specs: {
                    typing: "Dynamic, Strong (Duck Typing)",
                    memory: "Garbage Collected (Mark-Compact)",
                    execution: "Interpreted / JIT (YJIT in Ruby 3+)",
                    concurrency: "GIL, Ractors (Ruby 3), Fibers"
                },
                metrics: [
                    { label: "Performance / Speed", value: 42 },
                    { label: "Ease of Learning", value: 88 },
                    { label: "Community & Ecosystem", value: 80 },
                    { label: "Job Market Demand", value: 72 }
                ]
            },
            {
                id: "php",
                name: "PHP",
                year: 1994,
                creator: "Rasmus Lerdorf",
                shortDesc: "The server-side scripting language powering over 77% of the web, including WordPress and Facebook.",
                fullDesc: "PHP (Hypertext Preprocessor) is a general-purpose scripting language designed for web development. Embedded directly into HTML, PHP drives the majority of web servers globally. Modernized significantly from version 7 onward with typed properties, JIT compilation, and named arguments.",
                accentColor: "#777BB4",
                accentGlow: "rgba(119, 123, 180, 0.2)",
                accentLight: "#a4a7d0",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#777BB4" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 13H9V9h2v6zm4-2h-2v2h-2v-2H9v-2h2V9h2v2h2v2z"/></svg>`,
                categories: ["web", "interpreted", "scripting"],
                features: [
                    "Native HTML embedding allowing rapid server-side page generation.",
                    "Enormous hosting ecosystem with near-universal server support.",
                    "PHP 8 JIT compilation dramatically improves CPU-bound performance.",
                    "Vast ecosystem of CMS platforms built on PHP (WordPress, Drupal, Joomla)."
                ],
                codeSnippet: `<span class="comment">// PHP 8  -  modern typed, named-argument style</span>
<span class="keyword">declare</span>(strict_types=<span class="number">1</span>);

<span class="keyword">readonly class</span> <span class="type">Article</span> {
    <span class="keyword">public function</span> <span class="function">__construct</span>(
        <span class="keyword">public</span> <span class="type">int</span>    $id,
        <span class="keyword">public</span> <span class="type">string</span> $title,
        <span class="keyword">public</span> <span class="type">string</span> $author,
        <span class="keyword">public</span> <span class="type">bool</span>   $published = <span class="keyword">false</span>
    ) {}
}

<span class="keyword">function</span> <span class="function">filterPublished</span>(<span class="type">Article</span> ...$articles): <span class="type">array</span> {
    <span class="keyword">return</span> <span class="function">array_values</span>(
        <span class="function">array_filter</span>($articles, <span class="function">fn</span>($a) =&gt; $a-&gt;published)
    );
}

$articles = [
    <span class="keyword">new</span> <span class="type">Article</span>(id: <span class="number">1</span>, title: <span class="string">"Hello PHP 8"</span>, author: <span class="string">"Dev"</span>, published: <span class="keyword">true</span>),
    <span class="keyword">new</span> <span class="type">Article</span>(id: <span class="number">2</span>, title: <span class="string">"Draft Post"</span>,  author: <span class="string">"Dev"</span>),
];
<span class="function">var_dump</span>(<span class="function">filterPublished</span>(...$articles));`,
                rawCode: `declare(strict_types=1);

readonly class Article {
    public function __construct(
        public int    $id,
        public string $title,
        public string $author,
        public bool   $published = false
    ) {}
}

function filterPublished(Article ...$articles): array {
    return array_values(
        array_filter($articles, fn($a) => $a->published)
    );
}

$articles = [
    new Article(id: 1, title: "Hello PHP 8", author: "Dev", published: true),
    new Article(id: 2, title: "Draft Post",  author: "Dev"),
];
var_dump(filterPublished(...$articles));`,
                packageManager: "Composer (Packagist)",
                frameworksWeb: "Laravel, Symfony, CodeIgniter, WordPress",
                frameworksData: "PHP-ML, Rubix ML",
                primaryRuntime: "Zend Engine (PHP-FPM, CLI, mod_php)",
                pros: [
                    "Powers 77%+ of all websites  -  unmatched deployment ubiquity.",
                    "Extremely low barrier to entry for server-side scripting.",
                    "Laravel is a world-class modern MVC framework."
                ],
                cons: [
                    "Inconsistent standard library function naming and argument ordering.",
                    "Legacy codebases are notoriously difficult to maintain.",
                    "Stigma from older PHP 4/5 era still affects adoption choices."
                ],
                specs: {
                    typing: "Dynamic (Optional strict typing via declare)",
                    memory: "Garbage Collected (Reference Counting)",
                    execution: "Interpreted / JIT (PHP 8+)",
                    concurrency: "Process-per-request; async via ReactPHP/Swoole"
                },
                metrics: [
                    { label: "Performance / Speed", value: 55 },
                    { label: "Ease of Learning", value: 85 },
                    { label: "Community & Ecosystem", value: 90 },
                    { label: "Job Market Demand", value: 82 }
                ]
            },
            {
                id: "c",
                name: "C",
                year: 1972,
                creator: "Dennis Ritchie (Bell Labs)",
                shortDesc: "The foundational systems language that underpins operating systems, embedded firmware, and the entire software stack.",
                fullDesc: "C is a low-level, general-purpose procedural language developed at Bell Labs. It provides direct memory access via pointers, giving programmers close-to-hardware control. Linux, Windows NT, macOS kernels and virtually every embedded system are implemented in C. It remains the language closest to the machine without writing assembly.",
                accentColor: "#A8B9CC",
                accentGlow: "rgba(168, 185, 204, 0.2)",
                accentLight: "#c8d6e2",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#A8B9CC" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm2.5 14.5c-3.038 0-5-2.5-5-5s1.962-5 5-5c1.381 0 2.631.56 3.536 1.464l-1.415 1.415A3 3 0 0 0 14.5 8.5a3 3 0 0 0 0 6 3 3 0 0 0 2.121-.879l1.415 1.415A4.979 4.979 0 0 1 14.5 16.5z"/></svg>`,
                categories: ["systems", "compiled", "embedded"],
                features: [
                    "Direct pointer arithmetic enabling precise memory layout control.",
                    "Minimal runtime overhead  -  compiles to near-optimal machine code.",
                    "Portable standard (ANSI/ISO C) running on virtually every platform.",
                    "Inline assembly integration for hardware-critical code sections."
                ],
                codeSnippet: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>
<span class="keyword">#include</span> <span class="string">&lt;stdlib.h&gt;</span>
<span class="keyword">#include</span> <span class="string">&lt;string.h&gt;</span>

<span class="comment">/* Dynamic string buffer using manual memory management */</span>
<span class="keyword">typedef struct</span> {
    <span class="type">char</span>   *data;
    <span class="type">size_t</span>  length;
    <span class="type">size_t</span>  capacity;
} <span class="type">StrBuf</span>;

<span class="type">void</span> <span class="function">strbuf_append</span>(<span class="type">StrBuf</span> *buf, <span class="keyword">const</span> <span class="type">char</span> *src) {
    <span class="type">size_t</span> len = <span class="function">strlen</span>(src);
    <span class="keyword">if</span> (buf-&gt;length + len &gt;= buf-&gt;capacity) {
        buf-&gt;capacity = (buf-&gt;length + len) * <span class="number">2</span>;
        buf-&gt;data = <span class="function">realloc</span>(buf-&gt;data, buf-&gt;capacity);
    }
    <span class="function">memcpy</span>(buf-&gt;data + buf-&gt;length, src, len + <span class="number">1</span>);
    buf-&gt;length += len;
}

<span class="type">int</span> <span class="function">main</span>() {
    <span class="type">StrBuf</span> sb = { <span class="function">malloc</span>(<span class="number">64</span>), <span class="number">0</span>, <span class="number">64</span> };
    <span class="function">strbuf_append</span>(&amp;sb, <span class="string">"Hello, "</span>);
    <span class="function">strbuf_append</span>(&amp;sb, <span class="string">"C language!"</span>);
    <span class="function">printf</span>(<span class="string">"%s\\n"</span>, sb.data);
    <span class="function">free</span>(sb.data);
    <span class="keyword">return</span> <span class="number">0</span>;
}`,
                rawCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/* Dynamic string buffer using manual memory management */
typedef struct {
    char   *data;
    size_t  length;
    size_t  capacity;
} StrBuf;

void strbuf_append(StrBuf *buf, const char *src) {
    size_t len = strlen(src);
    if (buf->length + len >= buf->capacity) {
        buf->capacity = (buf->length + len) * 2;
        buf->data = realloc(buf->data, buf->capacity);
    }
    memcpy(buf->data + buf->length, src, len + 1);
    buf->length += len;
}

int main() {
    StrBuf sb = { malloc(64), 0, 64 };
    strbuf_append(&sb, "Hello, ");
    strbuf_append(&sb, "C language!");
    printf("%s\n", sb.data);
    free(sb.data);
    return 0;
}`,
                packageManager: "None (system package managers: apt, brew, vcpkg)",
                frameworksWeb: "libmicrohttpd, Onion",
                frameworksData: "GSL (GNU Scientific Library), BLAS",
                primaryRuntime: "Native Machine Code (GCC, Clang, MSVC)",
                pros: [
                    "Maximum performance  -  closest to the hardware without assembly.",
                    "Runs on every platform from microcontrollers to supercomputers.",
                    "50+ years of battle-tested libraries and compiler tooling."
                ],
                cons: [
                    "Manual memory management causes buffer overflows and use-after-free bugs.",
                    "No built-in OOP, generics, or modern abstractions.",
                    "Long build and debug cycles for complex systems."
                ],
                specs: {
                    typing: "Static, Weak (implicit casts allowed)",
                    memory: "Fully Manual (malloc/free)",
                    execution: "AOT Compiled to Native Machine Code",
                    concurrency: "POSIX Threads (pthreads), C11 Atomics"
                },
                metrics: [
                    { label: "Performance / Speed", value: 99 },
                    { label: "Ease of Learning", value: 45 },
                    { label: "Community & Ecosystem", value: 93 },
                    { label: "Job Market Demand", value: 85 }
                ]
            },
            {
                id: "scala",
                name: "Scala",
                year: 2004,
                creator: "Martin Odersky (EPFL)",
                shortDesc: "A hybrid functional-OOP JVM language powering big data pipelines at Twitter, LinkedIn, and Apache Spark.",
                fullDesc: "Scala fuses object-oriented and functional programming in a statically typed language targeting the JVM. Its expressive type system, pattern matching, and immutability defaults make it ideal for large-scale distributed data processing. Apache Spark, the dominant big data framework, is written entirely in Scala.",
                accentColor: "#DC322F",
                accentGlow: "rgba(220, 50, 47, 0.2)",
                accentLight: "#e97370",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#DC322F" d="M4 7.5C4 7.5 14 6 20 5v4C14 10 4 11.5 4 11.5V7.5zm0 5.5C4 13 14 11.5 20 10.5v4C14 15.5 4 17 4 17v-4zm0 5.5C4 18.5 14 17 20 16v3.5L4 22v-3.5z"/></svg>`,
                categories: ["functional", "object-oriented", "compiled", "data-science"],
                features: [
                    "Unified object and function model  -  functions are first-class objects.",
                    "Powerful pattern matching and algebraic data types via case classes.",
                    "Type inference reduces annotation burden while keeping full safety.",
                    "Apache Spark integration makes it ideal for distributed data processing."
                ],
                codeSnippet: `<span class="comment">// Immutable data pipeline using functional transformations</span>
<span class="keyword">case class</span> <span class="type">Transaction</span>(id: <span class="type">Int</span>, amount: <span class="type">Double</span>, category: <span class="type">String</span>)

<span class="keyword">object</span> <span class="type">FinanceReport</span> <span class="keyword">extends</span> <span class="type">App</span> {
  <span class="keyword">val</span> transactions = <span class="type">List</span>(
    <span class="type">Transaction</span>(<span class="number">1</span>, <span class="number">120.0</span>, <span class="string">"food"</span>),
    <span class="type">Transaction</span>(<span class="number">2</span>, <span class="number">450.0</span>, <span class="string">"tech"</span>),
    <span class="type">Transaction</span>(<span class="number">3</span>,  <span class="number">85.0</span>, <span class="string">"food"</span>),
    <span class="type">Transaction</span>(<span class="number">4</span>, <span class="number">200.0</span>, <span class="string">"tech"</span>)
  )

  <span class="keyword">val</span> summary = transactions
    .<span class="function">groupBy</span>(_.category)
    .<span class="function">map</span> { <span class="keyword">case</span> (cat, txns) =&gt;
      cat -&gt; txns.<span class="function">map</span>(_.amount).<span class="function">sum</span>
    }

  summary.<span class="function">foreach</span> { <span class="keyword">case</span> (cat, total) =&gt;
    <span class="function">println</span>(<span class="string">f"Category: $cat%10s  Total: $$total%.2f"</span>)
  }
}`,
                rawCode: `case class Transaction(id: Int, amount: Double, category: String)

object FinanceReport extends App {
  val transactions = List(
    Transaction(1, 120.0, "food"),
    Transaction(2, 450.0, "tech"),
    Transaction(3,  85.0, "food"),
    Transaction(4, 200.0, "tech")
  )

  val summary = transactions
    .groupBy(_.category)
    .map { case (cat, txns) =>
      cat -> txns.map(_.amount).sum
    }

  summary.foreach { case (cat, total) =>
    println(f"Category: $cat%10s  Total: $$total%.2f")
  }
}`,
                packageManager: "sbt, Maven, Gradle",
                frameworksWeb: "Play Framework, Akka HTTP, ZIO HTTP",
                frameworksData: "Apache Spark, Apache Flink, Breeze",
                primaryRuntime: "JVM (Scala 2/3), Scala.js, Scala Native",
                pros: [
                    "Unmatched for big-data pipelines via Spark and Flink.",
                    "Combines OOP and FP elegantly in one language.",
                    "Extremely expressive type system catches bugs at compile time."
                ],
                cons: [
                    "Steep learning curve due to advanced type system concepts.",
                    "Notoriously slow compilation times.",
                    "Binary compatibility issues between Scala 2 and 3."
                ],
                specs: {
                    typing: "Static, Strong, Structural",
                    memory: "Garbage Collected (JVM GC)",
                    execution: "JVM Bytecode / JIT at Runtime",
                    concurrency: "Actors (Akka), Futures, ZIO Effects"
                },
                metrics: [
                    { label: "Performance / Speed", value: 78 },
                    { label: "Ease of Learning", value: 35 },
                    { label: "Community & Ecosystem", value: 75 },
                    { label: "Job Market Demand", value: 74 }
                ]
            },
            {
                id: "r",
                name: "R",
                year: 1993,
                creator: "Ross Ihaka & Robert Gentleman (Univ. of Auckland)",
                shortDesc: "The statistical computing and data visualization language beloved by data scientists and academic researchers.",
                fullDesc: "R is a functional language specifically designed for statistical analysis, data wrangling, and producing publication-quality visualizations. Developed by statisticians for statisticians, it comes with thousands of specialized statistical packages via CRAN. The ggplot2 library and the Tidyverse ecosystem are industry standards for exploratory data analysis.",
                accentColor: "#276DC3",
                accentGlow: "rgba(39, 109, 195, 0.2)",
                accentLight: "#5b9de0",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#276DC3" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm2 13l-2-3H9v3H7V9h5c1.657 0 3 1.343 3 3 0 1.306-.834 2.417-2 2.83L15 15h-1zm-1-5H9v2h4a1 1 0 0 0 0-2z"/></svg>`,
                categories: ["data-science", "functional", "interpreted", "scientific"],
                features: [
                    "Native vector and matrix operations without explicit loops.",
                    "ggplot2 producing publication-quality statistical visualizations.",
                    "18,000+ CRAN packages covering every statistical method known.",
                    "R Markdown for reproducible analysis reports combining code and prose."
                ],
                codeSnippet: `<span class="comment"># Tidy data analysis pipeline using dplyr and ggplot2</span>
<span class="keyword">library</span>(tidyverse)

sales &lt;- tibble(
  month    = month.abb[<span class="number">1</span>:<span class="number">6</span>],
  revenue  = <span class="function">c</span>(<span class="number">12000</span>, <span class="number">15400</span>, <span class="number">11200</span>, <span class="number">18900</span>, <span class="number">22100</span>, <span class="number">19500</span>),
  units    = <span class="function">c</span>(<span class="number">240</span>, <span class="number">308</span>, <span class="number">224</span>, <span class="number">378</span>, <span class="number">442</span>, <span class="number">390</span>)
)

summary_stats &lt;- sales |&gt;
  <span class="function">mutate</span>(avg_price = revenue / units) |&gt;
  <span class="function">summarise</span>(
    total_revenue = <span class="function">sum</span>(revenue),
    mean_price    = <span class="function">mean</span>(avg_price),
    best_month    = month[<span class="function">which.max</span>(revenue)]
  )

<span class="function">print</span>(summary_stats)`,
                rawCode: `library(tidyverse)

sales <- tibble(
  month    = month.abb[1:6],
  revenue  = c(12000, 15400, 11200, 18900, 22100, 19500),
  units    = c(240, 308, 224, 378, 442, 390)
)

summary_stats <- sales |>
  mutate(avg_price = revenue / units) |>
  summarise(
    total_revenue = sum(revenue),
    mean_price    = mean(avg_price),
    best_month    = month[which.max(revenue)]
  )

print(summary_stats)`,
                packageManager: "CRAN (install.packages), renv, pak",
                frameworksWeb: "Shiny, Plumber (REST API)",
                frameworksData: "Tidyverse, data.table, Bioconductor",
                primaryRuntime: "GNU R Runtime",
                pros: [
                    "Unparalleled statistical library ecosystem via CRAN.",
                    "ggplot2 produces the most elegant data visualizations of any language.",
                    "Preferred by academic journals for reproducible research."
                ],
                cons: [
                    "Slow performance for large iterative loops  -  use vectorized ops.",
                    "Memory management can be opaque for large datasets.",
                    "Niche outside statistics; limited general-purpose application."
                ],
                specs: {
                    typing: "Dynamic, Weak (implicit coercion)",
                    memory: "Garbage Collected (copy-on-modify semantics)",
                    execution: "Interpreted (bytecode-compiled internally)",
                    concurrency: "parallel, future, furrr packages"
                },
                metrics: [
                    { label: "Performance / Speed", value: 38 },
                    { label: "Ease of Learning", value: 72 },
                    { label: "Community & Ecosystem", value: 82 },
                    { label: "Job Market Demand", value: 80 }
                ]
            },
            {
                id: "dart",
                name: "Dart",
                year: 2011,
                creator: "Lars Bak & Kasper Lund (Google)",
                shortDesc: "Google's optimized language for building beautiful cross-platform mobile, web, and desktop apps via Flutter.",
                fullDesc: "Dart is a client-optimized language designed for fast apps on any platform. It features a sound type system, async/await primitives, and compiles to native ARM/x64 or JavaScript. The Flutter framework uses Dart to build pixel-perfect UIs from a single codebase targeting iOS, Android, Web, and Desktop simultaneously.",
                accentColor: "#00B4AB",
                accentGlow: "rgba(0, 180, 171, 0.2)",
                accentLight: "#33cec7",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#00B4AB" d="M4.105 4.105S9.158 1.58 11.684.062c.516-.305.882-.058 1.374.217 1.46.813 3.235 2.243 4.244 3.37C18.581 5.203 20.515 8.14 21 10c-.707-.333-1.372-.515-2.05-.515C16 9.485 14 11.5 14 14s2 4.515 4.95 4.515c.525 0 1.007-.07 1.456-.193C19.4 20.756 12 22.914 12 22.914c-1.024.43-1.887.057-2.73-.857L4.105 4.105z"/></svg>`,
                categories: ["mobile", "compiled", "object-oriented", "web"],
                features: [
                    "Hot reload allowing instant UI changes without losing app state.",
                    "Sound null safety preventing null-reference errors at compile time.",
                    "AOT and JIT compilation modes for both dev speed and release performance.",
                    "Flutter renders UI directly to canvas  -  no platform widgets needed."
                ],
                codeSnippet: `<span class="comment">// Dart async stream for real-time data processing</span>
<span class="keyword">import</span> <span class="string">'dart:async'</span>;

<span class="keyword">class</span> <span class="type">SensorMonitor</span> {
  <span class="keyword">final</span> <span class="type">StreamController</span>&lt;<span class="type">double</span>&gt; _controller =
      <span class="type">StreamController</span>&lt;<span class="type">double</span>&gt;.<span class="function">broadcast</span>();

  <span class="type">Stream</span>&lt;<span class="type">double</span>&gt; <span class="keyword">get</span> readings =&gt; _controller.stream
      .<span class="function">where</span>((v) =&gt; v &gt; <span class="number">0</span>)
      .<span class="function">map</span>((v) =&gt; (v * <span class="number">1000</span>).<span class="function">roundToDouble</span>() / <span class="number">1000</span>);

  <span class="keyword">void</span> <span class="function">addReading</span>(<span class="type">double</span> value) =&gt; _controller.<span class="function">add</span>(value);
  <span class="keyword">void</span> <span class="function">dispose</span>() =&gt; _controller.<span class="function">close</span>();
}

<span class="keyword">void</span> <span class="function">main</span>() <span class="keyword">async</span> {
  <span class="keyword">final</span> monitor = <span class="type">SensorMonitor</span>();
  monitor.readings.<span class="function">listen</span>((v) =&gt; <span class="function">print</span>(<span class="string">'Reading: </span>$v<span class="string">'</span>));
  [<span class="number">1.2345</span>, -<span class="number">0.5</span>, <span class="number">3.7891</span>].<span class="function">forEach</span>(monitor.<span class="function">addReading</span>);
  <span class="keyword">await</span> <span class="type">Future</span>.<span class="function">delayed</span>(<span class="type">Duration</span>(milliseconds: <span class="number">10</span>));
  monitor.<span class="function">dispose</span>();
}`,
                rawCode: `import 'dart:async';

class SensorMonitor {
  final StreamController<double> _controller =
      StreamController<double>.broadcast();

  Stream<double> get readings => _controller.stream
      .where((v) => v > 0)
      .map((v) => (v * 1000).roundToDouble() / 1000);

  void addReading(double value) => _controller.add(value);
  void dispose() => _controller.close();
}

void main() async {
  final monitor = SensorMonitor();
  monitor.readings.listen((v) => print('Reading: \$v'));
  [1.2345, -0.5, 3.7891].forEach(monitor.addReading);
  await Future.delayed(Duration(milliseconds: 10));
  monitor.dispose();
}`,
                packageManager: "pub (pub.dev)",
                frameworksWeb: "Flutter Web, Dart Frog",
                frameworksData: "ml_algo, tflite_flutter",
                primaryRuntime: "Dart VM (JIT dev) / AOT native binary (release)",
                pros: [
                    "Flutter allows one codebase for iOS, Android, Web, Desktop.",
                    "Sound null safety and strong typing prevent whole categories of bugs.",
                    "Hot reload dramatically accelerates UI development cycles."
                ],
                cons: [
                    "Almost exclusively relevant in the Flutter/Google ecosystem.",
                    "Smaller community compared to React Native or native dev.",
                    "Dart outside Flutter has minimal server-side adoption."
                ],
                specs: {
                    typing: "Static, Strong, Sound Null Safety",
                    memory: "Garbage Collected (Generational GC)",
                    execution: "JIT (debug) / AOT native (release) / transpiled JS",
                    concurrency: "Isolates (no shared memory), async/await, Streams"
                },
                metrics: [
                    { label: "Performance / Speed", value: 80 },
                    { label: "Ease of Learning", value: 82 },
                    { label: "Community & Ecosystem", value: 76 },
                    { label: "Job Market Demand", value: 79 }
                ]
            },
            {
                id: "lua",
                name: "Lua",
                year: 1993,
                creator: "PUC-Rio (Roberto Ierusalimschy et al.)",
                shortDesc: "A lightweight, embeddable scripting language powering game engines like LOVE, Roblox, and World of Warcraft.",
                fullDesc: "Lua is designed to be embedded into larger applications as a scripting and configuration language. Weighing under 300KB, Lua's entire runtime fits in a microcontroller. It is the dominant scripting language in game engines, powering mods in Roblox, World of Warcraft, and LOVE2D, and embedded systems like OpenWrt routers.",
                accentColor: "#2C2D72",
                accentGlow: "rgba(44, 45, 114, 0.25)",
                accentLight: "#5c5da6",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#2C2D72" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14H9V8h2v6h2v2zm3-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>`,
                categories: ["scripting", "embedded", "interpreted"],
                features: [
                    "Sub-300KB runtime  -  smallest footprint of any scripting language.",
                    "Tables as the universal data structure (arrays, maps, objects).",
                    "Coroutine-based cooperative multitasking built into the core.",
                    "Clean C API for embedding into any host application."
                ],
                codeSnippet: `<span class="comment">-- Lua class pattern using metatables and coroutine producer</span>
<span class="keyword">local</span> <span class="type">Queue</span> = {}
<span class="type">Queue</span>.__index = <span class="type">Queue</span>

<span class="keyword">function</span> <span class="type">Queue</span>.<span class="function">new</span>()
  <span class="keyword">return</span> <span class="function">setmetatable</span>({ items = {}, head = <span class="number">1</span>, tail = <span class="number">0</span> }, <span class="type">Queue</span>)
<span class="keyword">end</span>

<span class="keyword">function</span> <span class="type">Queue</span>:<span class="function">push</span>(v)
  self.tail = self.tail + <span class="number">1</span>
  self.items[self.tail] = v
<span class="keyword">end</span>

<span class="keyword">function</span> <span class="type">Queue</span>:<span class="function">pop</span>()
  <span class="keyword">if</span> self.head &gt; self.tail <span class="keyword">then</span> <span class="keyword">return nil</span> <span class="keyword">end</span>
  <span class="keyword">local</span> v = self.items[self.head]
  self.items[self.head] = <span class="keyword">nil</span>; self.head = self.head + <span class="number">1</span>
  <span class="keyword">return</span> v
<span class="keyword">end</span>

<span class="keyword">local</span> q = <span class="type">Queue</span>.<span class="function">new</span>()
q:<span class="function">push</span>(<span class="string">"alpha"</span>); q:<span class="function">push</span>(<span class="string">"beta"</span>)
<span class="function">print</span>(q:<span class="function">pop</span>(), q:<span class="function">pop</span>())`,
                rawCode: `local Queue = {}
Queue.__index = Queue

function Queue.new()
  return setmetatable({ items = {}, head = 1, tail = 0 }, Queue)
end

function Queue:push(v)
  self.tail = self.tail + 1
  self.items[self.tail] = v
end

function Queue:pop()
  if self.head > self.tail then return nil end
  local v = self.items[self.head]
  self.items[self.head] = nil; self.head = self.head + 1
  return v
end

local q = Queue.new()
q:push("alpha"); q:push("beta")
print(q:pop(), q:pop())`,
                packageManager: "LuaRocks",
                frameworksWeb: "OpenResty (nginx+Lua), Lapis",
                frameworksData: "Torch (original), SciLua",
                primaryRuntime: "PUC-Lua, LuaJIT (JIT compiled)",
                pros: [
                    "Tiniest runtime of any production scripting language (<300KB).",
                    "Extremely easy to embed in C/C++ host applications.",
                    "LuaJIT is one of the fastest dynamic language implementations."
                ],
                cons: [
                    "1-indexed arrays confuse developers from other languages.",
                    "Minimal standard library  -  everything needs LuaRocks packages.",
                    "Small general-purpose job market outside game/embedded niches."
                ],
                specs: {
                    typing: "Dynamic, Duck Typing",
                    memory: "Garbage Collected (Incremental Mark-Sweep)",
                    execution: "Interpreted (Bytecode VM) / JIT via LuaJIT",
                    concurrency: "Coroutines (cooperative), no native threads"
                },
                metrics: [
                    { label: "Performance / Speed", value: 72 },
                    { label: "Ease of Learning", value: 80 },
                    { label: "Community & Ecosystem", value: 60 },
                    { label: "Job Market Demand", value: 52 }
                ]
            },
            {
                id: "elixir",
                name: "Elixir",
                year: 2011,
                creator: "Jose Valim",
                shortDesc: "A functional, concurrent language built on the battle-tested Erlang VM  -  ideal for fault-tolerant distributed systems.",
                fullDesc: "Elixir runs on the BEAM (Erlang VM), inheriting 30+ years of proven telecom-grade fault tolerance. Its actor model using lightweight processes and the Phoenix web framework enable millions of concurrent WebSocket connections on a single server. WhatsApp's infrastructure famously runs on Erlang/BEAM principles.",
                accentColor: "#6E4ADB",
                accentGlow: "rgba(110, 74, 219, 0.2)",
                accentLight: "#9d83e8",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#6E4ADB" d="M19.793 16.575C19.793 20.155 16.386 23 12.197 23c-4.185 0-7.594-2.845-7.594-6.425 0-3.133 2.13-7.533 4.558-10.535l.083-.104c.557-.706 1.095-1.388 1.37-2.084.153-.39.24-.799.24-1.238 0-.81-.273-1.56-.805-2.17-.064-.073-.066-.181.003-.249l.05-.049a.191.191 0 0 1 .264-.005c1.08.964 1.775 2.235 1.775 3.648 0 .658-.141 1.27-.373 1.835a14.66 14.66 0 0 1-.879 1.797c-.038.067-.076.135-.114.202 2.102 2.9 3.818 6.602 3.818 8.952z"/></svg>`,
                categories: ["functional", "web", "compiled", "systems"],
                features: [
                    "Millions of lightweight BEAM processes with sub-microsecond scheduling.",
                    "Let-it-crash supervisor trees enabling self-healing distributed systems.",
                    "Pattern matching and immutable data preventing entire bug classes.",
                    "Phoenix LiveView enabling real-time web UIs without JavaScript."
                ],
                codeSnippet: `<span class="comment"># GenServer actor managing a concurrent key-value store</span>
<span class="keyword">defmodule</span> <span class="type">KVStore</span> <span class="keyword">do</span>
  <span class="keyword">use</span> <span class="type">GenServer</span>

  <span class="keyword">def</span> <span class="function">start_link</span>(init \\\\ %{}),
    <span class="keyword">do</span>: <span class="type">GenServer</span>.<span class="function">start_link</span>(__MODULE__, init, name: __MODULE__)

  <span class="keyword">def</span> <span class="function">put</span>(key, val),
    <span class="keyword">do</span>: <span class="type">GenServer</span>.<span class="function">cast</span>(__MODULE__, {:put, key, val})

  <span class="keyword">def</span> <span class="function">get</span>(key),
    <span class="keyword">do</span>: <span class="type">GenServer</span>.<span class="function">call</span>(__MODULE__, {:get, key})

  <span class="comment"># Callbacks</span>
  <span class="keyword">def</span> <span class="function">init</span>(state), <span class="keyword">do</span>: {:ok, state}

  <span class="keyword">def</span> <span class="function">handle_cast</span>({:put, k, v}, state),
    <span class="keyword">do</span>: {:noreply, <span class="type">Map</span>.<span class="function">put</span>(state, k, v)}

  <span class="keyword">def</span> <span class="function">handle_call</span>({:get, k}, _from, state),
    <span class="keyword">do</span>: {:reply, <span class="type">Map</span>.<span class="function">get</span>(state, k), state}
<span class="keyword">end</span>`,
                rawCode: `defmodule KVStore do
  use GenServer

  def start_link(init \\ %{}),
    do: GenServer.start_link(__MODULE__, init, name: __MODULE__)

  def put(key, val),
    do: GenServer.cast(__MODULE__, {:put, key, val})

  def get(key),
    do: GenServer.call(__MODULE__, {:get, key})

  def init(state), do: {:ok, state}

  def handle_cast({:put, k, v}, state),
    do: {:noreply, Map.put(state, k, v)}

  def handle_call({:get, k}, _from, state),
    do: {:reply, Map.get(state, k), state}
end`,
                packageManager: "Mix + Hex (hex.pm)",
                frameworksWeb: "Phoenix, Plug, Ash Framework",
                frameworksData: "Nx (Numerical Elixir), Explorer, Axon",
                primaryRuntime: "BEAM (Erlang Virtual Machine)",
                pros: [
                    "Fault-tolerant by design  -  supervisor trees restart crashed processes.",
                    "Handles millions of simultaneous connections with low latency.",
                    "Phoenix LiveView enables real-time UIs without complex JS frameworks."
                ],
                cons: [
                    "Steep learning curve around the functional/actor mental model.",
                    "BEAM ecosystem is smaller than JVM or Node ecosystems.",
                    "Not suitable for CPU-intensive numerical or ML workloads."
                ],
                specs: {
                    typing: "Dynamic, Strong",
                    memory: "Per-process GC on the BEAM VM",
                    execution: "Compiled to BEAM bytecode",
                    concurrency: "Actor Model  -  millions of isolated lightweight processes"
                },
                metrics: [
                    { label: "Performance / Speed", value: 70 },
                    { label: "Ease of Learning", value: 58 },
                    { label: "Community & Ecosystem", value: 68 },
                    { label: "Job Market Demand", value: 65 }
                ]
            },
            {
                id: "julia",
                name: "Julia",
                year: 2012,
                creator: "Jeff Bezanson, Stefan Karpinski, Viral Shah, Alan Edelman (MIT)",
                shortDesc: "A high-performance language for scientific computing that solves the two-language problem  -  fast as C, readable as Python.",
                fullDesc: "Julia was designed to be simultaneously fast and easy to use for numerical and scientific computing. Using LLVM-based JIT compilation, Julia achieves C-like performance for array operations while offering Python-like syntax. It is increasingly adopted in physics, economics, bioinformatics, and machine learning research.",
                accentColor: "#9558B2",
                accentGlow: "rgba(149, 88, 178, 0.2)",
                accentLight: "#b98acc",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#9558B2" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 13V9l6 3-6 3z"/></svg>`,
                categories: ["scientific", "data-science", "compiled", "functional"],
                features: [
                    "LLVM JIT compilation achieving C/Fortran-level numerical performance.",
                    "Multiple dispatch as the core paradigm  -  functions defined over type combinations.",
                    "First-class support for unicode math symbols matching paper notation.",
                    "Distributed computing primitives built into the standard library."
                ],
                codeSnippet: `<span class="comment"># Julia multiple dispatch + broadcast operations</span>
<span class="keyword">using</span> <span class="type">LinearAlgebra</span>, <span class="type">Statistics</span>

<span class="keyword">struct</span> <span class="type">Dataset</span>{T &lt;: <span class="type">Real</span>}
    X :: <span class="type">Matrix</span>{T}
    y :: <span class="type">Vector</span>{T}
<span class="keyword">end</span>

<span class="comment"># Ordinary Least Squares using matrix operations</span>
<span class="keyword">function</span> <span class="function">ols_fit</span>(ds::<span class="type">Dataset</span>)
    beta = (ds.X' * ds.X) \ (ds.X' * ds.y)
    Å· = ds.X * beta
    residuals = ds.y .- Å·
    r^2 = <span class="number">1</span> - <span class="function">var</span>(residuals) / <span class="function">var</span>(ds.y)
    (; beta, r^2)
<span class="keyword">end</span>

X = [<span class="function">ones</span>(<span class="number">5</span>) [<span class="number">1.0</span>,<span class="number">2.0</span>,<span class="number">3.0</span>,<span class="number">4.0</span>,<span class="number">5.0</span>]]
y = [<span class="number">2.1</span>, <span class="number">3.9</span>, <span class="number">6.2</span>, <span class="number">7.8</span>, <span class="number">10.1</span>]
result = <span class="function">ols_fit</span>(<span class="type">Dataset</span>(X, y))
<span class="function">println</span>(<span class="string">"Coefficients: </span>$(result.beta)<span class="string">, R²: </span>$(round(result.r^2, digits=<span class="number">4</span>))<span class="string">")`,
                rawCode: `using LinearAlgebra, Statistics

struct Dataset{T <: Real}
    X :: Matrix{T}
    y :: Vector{T}
end

function ols_fit(ds::Dataset)
    beta = (ds.X' * ds.X) \ (ds.X' * ds.y)
    Å· = ds.X * beta
    residuals = ds.y .- Å·
    r^2 = 1 - var(residuals) / var(ds.y)
    (; beta, r^2)
end

X = [ones(5) [1.0,2.0,3.0,4.0,5.0]]
y = [2.1, 3.9, 6.2, 7.8, 10.1]
result = ols_fit(Dataset(X, y))
println("Coefficients: $(result.beta), R²: $(round(result.r^2, digits=4))")`,
                packageManager: "Pkg.jl (Julia's built-in package manager)",
                frameworksWeb: "Genie.jl, Oxygen.jl",
                frameworksData: "Flux.jl, Turing.jl, DataFrames.jl, DifferentialEquations.jl",
                primaryRuntime: "Julia Runtime (LLVM JIT)",
                pros: [
                    "Solves the two-language problem  -  prototype AND production in one language.",
                    "Performance on numerical code rivals C and Fortran.",
                    "Multiple dispatch enables elegant mathematical code organization."
                ],
                cons: [
                    "Long first-run JIT compilation latency ('time to first plot' issue).",
                    "Smaller package ecosystem than Python for general-purpose tasks.",
                    "Niche outside scientific computing  -  limited web/mobile adoption."
                ],
                specs: {
                    typing: "Dynamic with optional type annotations, Multiple Dispatch",
                    memory: "Garbage Collected (Generational)",
                    execution: "JIT Compiled via LLVM",
                    concurrency: "Coroutines, Distributed.jl, Threads, @spawn"
                },
                metrics: [
                    { label: "Performance / Speed", value: 95 },
                    { label: "Ease of Learning", value: 68 },
                    { label: "Community & Ecosystem", value: 65 },
                    { label: "Job Market Demand", value: 58 }
                ]
            },
            {
                id: "rust",
                name: "Rust",
                year: 2010,
                creator: "Graydon Hoare",
                shortDesc: "A systems programming language focused on safety, speed, and concurrency without sacrificing low-level control.",
                fullDesc: "Rust delivers memory safety and thread safety through its ownership model, making it ideal for embedded systems, performance-critical code, and reliable infrastructure. It combines the control of C/C++ with modern tooling and compiler checks.",
                accentColor: "#B7410E",
                accentGlow: "rgba(183, 65, 14, 0.2)",
                accentLight: "#f97316",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#B7410E" d="M12 2c2.21 0 4 1.79 4 4v1.5h2c1.38 0 2.5 1.12 2.5 2.5v2c0 1.38-1.12 2.5-2.5 2.5h-2V16c0 2.21-1.79 4-4 4s-4-1.79-4-4v-1.5H6c-1.38 0-2.5-1.12-2.5-2.5v-2C3.5 7.12 4.62 6 6 6h2V6c0-2.21 1.79-4 4-4zm0 2a2 2 0 0 0-2 2v1h4V6a2 2 0 0 0-2-2z"/></svg>`,
                categories: ["systems", "compiled", "functional"],
                features: [
                    "Ownership and borrowing rules prevent common memory bugs at compile time.",
                    "Excellent performance with no garbage collector overhead.",
                    "Powerful concurrency primitives for safe parallel programming.",
                    "Growing ecosystem for embedded, web, and CLI tools."
                ],
                codeSnippet: `<span class="keyword">fn</span> <span class="function">main</span>() {
    <span class="keyword">let</span> data = <span class="function">vec</span>![<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>];
    <span class="keyword">for</span> value <span class="keyword">in</span> data {
        <span class="function">println!</span>(<span class="string">"{value}"</span>);
    }
}`,
                rawCode: `fn main() {
    let data = vec![1, 2, 3];
    for value in data {
        println!("{value}");
    }
}`,
                packageManager: "Cargo",
                frameworksWeb: "Axum, Actix Web, Rocket",
                frameworksData: "ndarray, Polars, tch-rs",
                primaryRuntime: "rustc / LLVM",
                pros: [
                    "Outstanding performance and memory safety.",
                    "Strong ecosystem for systems and embedded engineering.",
                    "Excellent tooling with Cargo and Clippy."
                ],
                cons: [
                    "Steeper learning curve due to ownership rules.",
                    "Compilation can feel strict for beginners.",
                    "Longer iteration time in some projects."
                ],
                specs: {
                    typing: "Static, Strong",
                    memory: "Manual + Ownership Model",
                    execution: "Compiled Native",
                    concurrency: "Threads, Async, Fearless Concurrency"
                },
                metrics: [
                    { label: "Performance / Speed", value: 95 },
                    { label: "Ease of Learning", value: 72 },
                    { label: "Community & Ecosystem", value: 84 },
                    { label: "Job Market Demand", value: 80 }
                ]
            },
            {
                id: "go",
                name: "Go",
                year: 2009,
                creator: "Robert Griesemer, Rob Pike, Ken Thompson",
                shortDesc: "A pragmatic, statically typed language built for scalable services, tooling, and cloud-native development.",
                fullDesc: "Go emphasizes simplicity, fast compilation, and dependable concurrency. It has become a staple for backend services, CLI tools, Kubernetes, and distributed systems where clarity and deployment speed matter.",
                accentColor: "#00ADD8",
                accentGlow: "rgba(0, 173, 216, 0.2)",
                accentLight: "#4dd4ff",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#00ADD8" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1.6 5.2h-1.8l-1.8 5.6h1.8l.6-1.9h2.4l.6 1.9h1.8l-1.8-5.6zm-1.2 3.1 1.1-3.2 1.1 3.2h-2.2zm4.4 2.5c0-1.4 1.1-2.5 2.4-2.5h.7v1.3h-.7c-.6 0-1.1.5-1.1 1.2 0 .7.5 1.2 1.1 1.2h.7v1.3h-.7c-1.3 0-2.4-1.1-2.4-2.5z"/></svg>`,
                categories: ["web", "systems", "compiled"],
                features: [
                    "Minimal syntax makes code easy to read and maintain.",
                    "Built-in concurrency with goroutines and channels.",
                    "Excellent standard library for networking and HTTP services.",
                    "Fast compilation and straightforward deployment model."
                ],
                codeSnippet: `<span class="keyword">package</span> main

<span class="keyword">import</span> <span class="string">"fmt"</span>

<span class="keyword">func</span> <span class="function">main</span>() {
    <span class="keyword">go</span> <span class="keyword">func</span>() {
        <span class="function">fmt</span>.<span class="function">Println</span>(<span class="string">"Hello from Goroutine"</span>)
    }()
}`,
                rawCode: `package main

import "fmt"

func main() {
    go func() {
        fmt.Println("Hello from Goroutine")
    }()
}`,
                packageManager: "Go Modules",
                frameworksWeb: "Gin, Echo, Fiber",
                frameworksData: "gorm, pgx, go-sql-driver/mysql",
                primaryRuntime: "Go compiler / gc",
                pros: [
                    "Simple syntax and strong standard library.",
                    "Great concurrency model for scalable services.",
                    "Excellent tooling for cloud-native teams."
                ],
                cons: [
                    "Less expressive for some high-level abstractions.",
                    "Verbose error handling in larger applications.",
                    "Generics were introduced later than in some rivals."
                ],
                specs: {
                    typing: "Static, Strong",
                    memory: "Garbage Collected",
                    execution: "Compiled",
                    concurrency: "Goroutines, Channels"
                },
                metrics: [
                    { label: "Performance / Speed", value: 88 },
                    { label: "Ease of Learning", value: 84 },
                    { label: "Community & Ecosystem", value: 82 },
                    { label: "Job Market Demand", value: 83 }
                ]
            },
            {
                id: "kotlin",
                name: "Kotlin",
                year: 2011,
                creator: "JetBrains",
                shortDesc: "A modern language for Android, JVM applications, and cross-platform development with concise syntax.",
                fullDesc: "Kotlin combines safety, concision, and interoperability with Java. It has become the standard for Android development while also supporting backend services, web apps, and multiplatform projects.",
                accentColor: "#7F52FF",
                accentGlow: "rgba(127, 82, 255, 0.2)",
                accentLight: "#a78bfa",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#7F52FF" d="M3 3h18v18H3V3zm2 2v14h14V5H5zm3 3h2.4l2.1 3.3 2.1-3.3H16l-3.6 5.4L16 15h-2.4l-2.1-3.3-2.1 3.3H8l3.6-5.4L8 8z"/></svg>`,
                categories: ["mobile", "object-oriented", "compiled"],
                features: [
                    "Concise syntax reduces boilerplate and improves readability.",
                    "Strong interoperability with Java libraries and frameworks.",
                    "Great support for coroutines and asynchronous programming.",
                    "Multiplatform support for Android, desktop, and web."
                ],
                codeSnippet: `<span class="keyword">fun</span> <span class="function">main</span>() {
    <span class="keyword">val</span> users = <span class="function">listOf</span>(<span class="string">"Ada"</span>, <span class="string">"Linus"</span>)
    users.<span class="function">forEach</span> { user -&gt;
        <span class="function">println</span>(<span class="string">"Hello $user"</span>)
    }
}`,
                rawCode: `fun main() {
    val users = listOf("Ada", "Linus")
    users.forEach { user ->
        println("Hello $user")
    }
}`,
                packageManager: "Gradle / Maven",
                frameworksWeb: "Ktor, Spring Boot",
                frameworksData: "Room, Exposed, Jetpack DataStore",
                primaryRuntime: "JVM, Kotlin/Native, Kotlin/JS",
                pros: [
                    "Modern, readable syntax with less boilerplate.",
                    "Excellent Android and JVM ecosystem support.",
                    "Strong design for scalable applications."
                ],
                cons: [
                    "Some tooling can be more complex than expected.",
                    "Compilation errors may be harder to interpret at times.",
                    "Smaller ecosystem than Java in some niches."
                ],
                specs: {
                    typing: "Static, Strong",
                    memory: "Managed by Runtime",
                    execution: "Compiled to JVM/Native/JS",
                    concurrency: "Coroutines, Threads"
                },
                metrics: [
                    { label: "Performance / Speed", value: 84 },
                    { label: "Ease of Learning", value: 82 },
                    { label: "Community & Ecosystem", value: 85 },
                    { label: "Job Market Demand", value: 88 }
                ]
            },
            {
                id: "swift",
                name: "Swift",
                year: 2014,
                creator: "Apple",
                shortDesc: "A fast, safe, and expressive language for Apple platforms and modern server applications.",
                fullDesc: "Swift was created to make Apple development more approachable without compromising speed. It now supports iOS, macOS, watchOS, tvOS, and growing server-side development with a strong safety model.",
                accentColor: "#FF9500",
                accentGlow: "rgba(255, 149, 0, 0.2)",
                accentLight: "#ffb347",
                logoSvg: `<svg viewBox="0 0 24 24"><path fill="#FF9500" d="M12 2c2.5 0 4.5 1.5 5.8 4.5 1.1 2.6 1 5.6-.5 8.1-1.2 2.3-3.1 4.2-5.3 5.3-1.2.6-2.6 1.1-4 1.1-1.2 0-2.4-.3-3.5-.8 1.2-1.8 2.2-3.8 2.7-5.9.5-2.2.4-4.4-.4-6.4.8-1.6 2.2-2.8 4.2-3.3.4-.1.8-.2 1.2-.2z"/></svg>`,
                categories: ["mobile", "object-oriented", "compiled"],
                features: [
                    "Modern syntax with strong type inference and safety.",
                    "Excellent support for Apple frameworks and native UI development.",
                    "Powerful async features built into the language.",
                    "Growing ecosystem for server-side and cross-platform work."
                ],
                codeSnippet: `<span class="keyword">import</span> Foundation

<span class="keyword">func</span> <span class="function">greet</span>(name: <span class="type">String</span>) {
    <span class="function">print</span>(<span class="string">"Hello, \(name)"</span>)
}`,
                rawCode: `import Foundation

func greet(name: String) {
    print("Hello, \(name)")
}`,
                packageManager: "Swift Package Manager",
                frameworksWeb: "Vapor, Kitura",
                frameworksData: "Core Data, SwiftData",
                primaryRuntime: "Swift runtime / LLVM",
                pros: [
                    "Excellent for Apple ecosystem development.",
                    "High safety and performance.",
                    "Modern syntax with clear language design."
                ],
                cons: [
                    "Most powerful in Apple-centric environments.",
                    "Smaller cross-platform footprint than some rivals.",
                    "Tooling is strongest on Apple platforms."
                ],
                specs: {
                    typing: "Static, Strong",
                    memory: "Automatic Reference Counting",
                    execution: "Compiled Native",
                    concurrency: "Async/Await, Actors"
                },
                metrics: [
                    { label: "Performance / Speed", value: 90 },
                    { label: "Ease of Learning", value: 78 },
                    { label: "Community & Ecosystem", value: 76 },
                    { label: "Job Market Demand", value: 85 }
                ]
            }
        ];

const beginnerGuides = {
    python: {
        syntax: "Use indentation for blocks, define functions with def, and keep variables simple at first.",
        keywords: [
            { name: "def", detail: "Defines a function. Example: def greet(): prints a message.", example: "def greet():\n    print('Hello')" },
            { name: "if", detail: "Runs code when a condition is true.", example: "age = 18\nif age >= 18:\n    print('Adult')" },
            { name: "for", detail: "Loops through a collection of items.", example: "for item in [1, 2, 3]:\n    print(item)" },
            { name: "class", detail: "Creates a blueprint for objects.", example: "class User:\n    pass" }
        ],
        dataTypes: [
            { name: "int", detail: "Stores whole numbers such as 3 or 10.", example: "count = 5" },
            { name: "str", detail: "Stores text values like names or messages.", example: "name = 'Ada'" },
            { name: "list", detail: "Stores ordered values in a single variable.", example: "items = [1, 2, 3]" }
        ],
        concepts: [
            { name: "Variables", detail: "Containers for storing data in memory.", example: "x = 10" },
            { name: "Functions", detail: "Reusable blocks of code for specific tasks.", example: "def add(a, b):\n    return a + b" },
            { name: "Loops", detail: "Repeat actions without rewriting code.", example: "for i in range(3):\n    print(i)" }
        ],
        firstSteps: [
            { label: "Write a hello-world script", code: "print('Hello, world!')" },
            { label: "Practice loops and conditions", code: "for i in range(3):\n    print(i)" },
            { label: "Explore lists and dictionaries", code: "data = {'name': 'Ada'}\nprint(data['name'])" }
        ]
    },
    javascript: {
        syntax: "Learn variables, functions, and objects first; then add async programming gradually.",
        keywords: [
            { name: "let", detail: "Declares a variable that can be reassigned.", example: "let count = 1;" },
            { name: "const", detail: "Declares a variable that should not be reassigned.", example: "const name = 'Ada';" },
            { name: "function", detail: "Defines a reusable block of code.", example: "function greet() { return 'Hi'; }" },
            { name: "async", detail: "Marks a function as asynchronous.", example: "async function load() { await fetch('/'); }" }
        ],
        dataTypes: [
            { name: "string", detail: "Text data such as names or messages.", example: "const title = 'Hello';" },
            { name: "number", detail: "Numeric values including integers and decimals.", example: "const age = 21;" },
            { name: "object", detail: "Stores key-value pairs of related data.", example: "const user = { name: 'Ada' };" }
        ],
        concepts: [
            { name: "Variables", detail: "Store information for later use.", example: "let score = 10;" },
            { name: "Functions", detail: "Organize reusable code into blocks.", example: "function add(a, b) { return a + b; }" },
            { name: "Promises", detail: "Handle asynchronous operations safely.", example: "fetch('/').then(r => r.json())" }
        ],
        firstSteps: [
            { label: "Build a simple button interaction", code: "button.onclick = () => alert('Clicked');" },
            { label: "Practice array methods", code: "['a', 'b'].map(x => x.toUpperCase())" },
            { label: "Learn fetch and promises", code: "fetch('/api').then(r => r.json())" }
        ]
    },
    typescript: {
        syntax: "Start with types on variables and function inputs to make code safer and clearer.",
        keywords: [
            { name: "interface", detail: "Describes the shape of an object.", example: "interface User { name: string; }" },
            { name: "type", detail: "Creates a reusable alias for a type.", example: "type ID = string | number;" },
            { name: "class", detail: "Defines an object blueprint with methods.", example: "class Box { value: number = 1; }" }
        ],
        dataTypes: [
            { name: "string", detail: "Stores text values.", example: "let title: string = 'Code';" },
            { name: "number", detail: "Stores numeric values.", example: "let age: number = 20;" },
            { name: "union", detail: "Allows a value to be one of several types.", example: "type Status = 'ok' | 'error';" }
        ],
        concepts: [
            { name: "Type annotations", detail: "Explicitly label values with their expected type.", example: "let name: string = 'Ada';" },
            { name: "Generics", detail: "Create reusable components for many types.", example: "function id<T>(value: T): T { return value; }" },
            { name: "Enums", detail: "Define a fixed set of named values.", example: "enum Role { Admin, Member }" }
        ],
        firstSteps: [
            { label: "Add types to a small function", code: "function greet(name: string) { return name; }" },
            { label: "Model a simple object with an interface", code: "interface User { name: string; }" },
            { label: "Use a union type", code: "type Status = 'ok' | 'error';" }
        ]
    },
    rust: {
        syntax: "Focus on variables, functions, and ownership; the compiler will teach you the rest.",
        keywords: [
            { name: "fn", detail: "Defines a function.", example: "fn greet() { println!(\"Hi\"); }" },
            { name: "let", detail: "Binds a value to a variable.", example: "let name = \"Ada\";" },
            { name: "mut", detail: "Allows a variable to be changed after assignment.", example: "let mut count = 0;" },
            { name: "match", detail: "Matches a value against patterns.", example: "match value { 1 => println!(\"one\"), _ => println!(\"other\") }" }
        ],
        dataTypes: [
            { name: "i32", detail: "A 32-bit signed integer.", example: "let age: i32 = 20;" },
            { name: "bool", detail: "Stores true or false values.", example: "let ready: bool = true;" },
            { name: "String", detail: "Stores text in a growable string object.", example: "let name = String::from(\"Ada\");" }
        ],
        concepts: [
            { name: "Ownership", detail: "Each value has one clear owner at a time.", example: "let s = String::from(\"hi\");" },
            { name: "Borrowing", detail: "Lets code use a value without taking ownership.", example: "let len = s.len();" },
            { name: "Enums", detail: "Model a small set of named values.", example: "enum Status { Ok, Error }" }
        ],
        firstSteps: [
            { label: "Write a small println program", code: "println!(\"Hello\");" },
            { label: "Practice mutable variables", code: "let mut count = 1; count += 1;" },
            { label: "Understand ownership with a simple function", code: "fn greet(name: String) { println!(\"{name}\"); }" }
        ]
    },
    go: {
        syntax: "Keep your first programs simple; Go is clean and easy to read once the structure is familiar.",
        keywords: [
            { name: "package", detail: "Groups related code into a package.", example: "package main" },
            { name: "func", detail: "Defines a function.", example: "func main() {}" },
            { name: "var", detail: "Declares a variable.", example: "var name string" },
            { name: "range", detail: "Iterates over values in a collection.", example: "for _, v := range nums {" }
        ],
        dataTypes: [
            { name: "string", detail: "Text data.", example: "var name string = \"Ada\"" },
            { name: "int", detail: "Whole numbers.", example: "var age int = 21" },
            { name: "map", detail: "Stores key-value pairs.", example: "m := map[string]int{\"age\": 21}" }
        ],
        concepts: [
            { name: "Packages", detail: "Organize code into reusable units.", example: "package main" },
            { name: "Slices", detail: "Flexible views over arrays.", example: "nums := []int{1, 2, 3}" },
            { name: "Concurrency", detail: "Use goroutines to run code independently.", example: "go func() { println(\"go\") }()" }
        ],
        firstSteps: [
            { label: "Build a hello-world app", code: "fmt.Println(\"Hello\")" },
            { label: "Create a small loop and slice", code: "nums := []int{1, 2, 3}\nfor _, n := range nums { fmt.Println(n) }" },
            { label: "Try a basic goroutine", code: "go func() { fmt.Println(\"Hi\") }()" }
        ]
    },
    swift: {
        syntax: "Use clear types and simple functions; Swift is designed to feel readable and safe.",
        keywords: [
            { name: "func", detail: "Defines a function.", example: "func greet() { print(\"Hi\") }" },
            { name: "let", detail: "Creates an immutable value.", example: "let name = \"Ada\"" },
            { name: "var", detail: "Creates a mutable value.", example: "var count = 0" },
            { name: "struct", detail: "Defines a lightweight data structure.", example: "struct User { var name: String }" }
        ],
        dataTypes: [
            { name: "String", detail: "Stores text.", example: "let title: String = \"Hi\"" },
            { name: "Int", detail: "Stores whole numbers.", example: "let age: Int = 21" },
            { name: "Array", detail: "Stores an ordered collection of values.", example: "let nums = [1, 2, 3]" }
        ],
        concepts: [
            { name: "Optionals", detail: "Represent values that may be missing.", example: "var name: String?" },
            { name: "Closures", detail: "Anonymous functions stored as values.", example: "let add = { (a: Int, b: Int) -> Int in a + b }" },
            { name: "Async", detail: "Runs work without blocking the main thread.", example: "async { try await Task.sleep(1_000) }" }
        ],
        firstSteps: [
            { label: "Print a greeting", code: "print(\"Hello\")" },
            { label: "Build a simple function", code: "func greet() { print(\"Hi\") }" },
            { label: "Try a loop over an array", code: "for item in [1, 2, 3] { print(item) }" }
        ]
    },
    kotlin: {
        syntax: "Learn concise functions, null safety, and collections early, then build up from there.",
        keywords: [
            { name: "fun", detail: "Defines a function.", example: "fun greet() { println(\"Hi\") }" },
            { name: "val", detail: "Declares an immutable value.", example: "val name = \"Ada\"" },
            { name: "var", detail: "Declares a mutable value.", example: "var age = 20" },
            { name: "when", detail: "Performs branching like a switch statement.", example: "when (value) { 1 -> println(\"one\") }" }
        ],
        dataTypes: [
            { name: "String", detail: "Stores text.", example: "val name: String = \"Ada\"" },
            { name: "Int", detail: "Stores whole numbers.", example: "val age: Int = 20" },
            { name: "List", detail: "Stores an ordered collection.", example: "val nums = listOf(1, 2, 3)" }
        ],
        concepts: [
            { name: "Null safety", detail: "Helps prevent null-related crashes.", example: "val name: String? = null" },
            { name: "Data classes", detail: "Easy ways to model simple data objects.", example: "data class User(val name: String)" },
            { name: "Coroutines", detail: "Manage async code with lightweight concurrency.", example: "launch { delay(1000) }" }
        ],
        firstSteps: [
            { label: "Write a hello-world function", code: "fun main() { println(\"Hello\") }" },
            { label: "Explore list operations", code: "val nums = listOf(1, 2, 3)" },
            { label: "Try a simple when expression", code: "when (2) { 1 -> println(\"one\") else -> println(\"other\") }" }
        ]
    }
};
