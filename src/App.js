import { useState, useEffect } from "react";

function Divider({ isDesktop }) {
    if (isDesktop) {
        return (
            <div className="divider">
                <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
                        <g transform="translate(212)" fill="#CEE3E9">
                            <rect width="6" height="16" rx="3" />
                            <rect x="14" width="6" height="16" rx="3" />
                        </g>
                    </g>
                </svg>
            </div>
        );
    } else {
        return (
            <div className="divider">
                <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
                        <g transform="translate(138)" fill="#CEE3E9">
                            <rect width="6" height="16" rx="3" />
                            <rect x="14" width="6" height="16" rx="3" />
                        </g>
                    </g>
                </svg>
            </div>
        );
    }
}

function AdviceNumber() {
    return <span className="advice-number">Advice #117</span>;
}

function Advice() {
    return <q className="advice-text">It is easy to sit up and take notice, what's difficult is getting up and taking action.</q>;
}

function ButtonGetAdvice() {
    return (
        <button className="btn btn-generate-advice">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                    fill="#202733"
                />
            </svg>
        </button>
    );
}

function App() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 800);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <main>
            <section className="max-width-wrapper">
                <div className="advice-container">
                    <AdviceNumber />
                    <Advice />
                    <Divider isDesktop={isDesktop} />
                    <ButtonGetAdvice />
                </div>
            </section>
        </main>
    );
}

export default App;
