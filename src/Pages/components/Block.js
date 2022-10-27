import React from 'react';

const Block = () => {
    return (
        <div>
            <div className="dark:bg-gray-800 dark:text-gray-100 mt-5">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">CORS</a>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">01.What is CORS?</a>
                        <p className="mt-2">Cross-origin resource sharing (CORS)
                            is a browser security feature that restricts cross-origin HTTP requests that are
                            initiated from scripts running in the browser. If your REST API's resources receive non-simple
                            cross-origin HTTP requests, you need to enable CORS support.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline "></a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <a className="hover:underline dark:text-violet-400">Read more</a>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* -------tow----- */}
            <div className="dark:bg-gray-800 dark:text-gray-100 mt-5">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">ATHENTICATION</a>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">02.What is fairbase ?</a>
                        <p className="my-2">Firebase provides tools to grow your app and business, for startups & global enterprises.
                         Get your app up and running quickly & securely with fully managed backend infrastructure. 15+ Products & Solutions. Cross-Platform Solutions. Boost App Engagement. Backed by Google.</p>
                        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline mt-3"> What other options do you have to implement authentication?</a>
                        <p>Single-Factor/Primary Authentication. ...
                            Two-Factor Authentication (2FA) ...
                            Single Sign-On (SSO) ...
                            Multi-Factor Authentication (MFA) ...
                            Password Authentication Protocol (PAP) ...
                            Challenge Handshake Authentication Protocol (CHAP) ...
                            Extensible Authentication Protocol (EAP</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline "></a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <a className="hover:underline dark:text-violet-400">Read more</a>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dark:bg-gray-800 dark:text-gray-100 mt-5">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">NODE.JS</a>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">03.How does work node js?</a>
                        <p className="mt-2">Node. js is a JavaScript runtime environment that achieves low latency and
                            high throughput by taking a “non-blocking” approach to serving
                            requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline "></a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <a className="hover:underline dark:text-violet-400">Read more</a>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dark:bg-gray-800 dark:text-gray-100 mt-5">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Privet Router</a>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">04.How Work Privet Router</a>
                        <p className="mt-2">The private route component is used to protect selected
                            pages in a React app from unauthenticated users.The private route component is similar to the public route, the only
                            change is that redirect URL and authenticate condition. If the user is not authenticated he will be redir
                            ected to the login page and the user can only access the authenticated
                            routes If he is authenticated (Logged in).</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline "></a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <a className="hover:underline dark:text-violet-400">Read more</a>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Block;