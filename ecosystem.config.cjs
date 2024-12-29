const OPENAI_API_KEY = "TODO";

module.exports = {
    apps: [
        {
            name: "nyan_ai_mongo",   
            script: "docker-compose up",
            watch: false,
            restart_delay: 5000,
        },
        {
            name: "nyan_ai_crawl",
            script: "source ../venv/bin/activate && bash crawl.sh",
            watch: false,
            restart_delay: 5000,
            env: {
                OPENAI_API_KEY: OPENAI_API_KEY,
            },
        },
        {
            name: "nyan_ai_send_daemon",
            script: "source ../venv/bin/activate && bash send.sh",
            watch: false,
            restart_delay: 5000,
            env: {
                OPENAI_API_KEY: OPENAI_API_KEY,
            },
        }
    ]
};
