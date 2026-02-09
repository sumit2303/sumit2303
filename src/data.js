export const resumeData = {
    name: "Sumit Kumar",
    role: "Senior Game Tools Engineer",
    location: "Harolds Cross, Dublin",
    contact: {
        email: "sumitk2303@gmail.com",
        phone: "+353-87 393 1367",
        linkedin: "https://www.linkedin.com/in/sumit2303/",
        github: "https://github.com/sumit2303"
    },
    summary: `Engineering leader with 12+ years of experience building scalable internal tools, automation systems, and customer support platforms in gaming and enterprise environments. Currently driving tooling initiatives at Star Trek Fleet Command, with a focus on improving developer workflows and agent productivity.

Proven ability to lead cross-functional teams, develop full-stack solutions, and architect support tools that reduce resolution time and enhance user experience. Experienced in Unity tooling, API integrations, CI/CD, and cloud-native infrastructure (AWS, Azure).`,
    experience: [
        {
            company: "DIGIT, A Scopely Studio",
            role: "Senior Game Tools Engineer",
            period: "July 2022 – Present",
            tech: "Python, Unity, Shell, GitLab CI, Custom Libs",
            details: [
                "Internal Support Tools",
                "QA Automation",
                "Telemetry Integration",
                "Developer Productivity",
                "System Diagnostics"
            ]
        },
        {
            company: "Munich Re Automation Solutions",
            role: "Senior Automation Engineer",
            period: "Aug 2020 – June 2022",
            tech: "TypeScript, Azure Pipelines, Azure Templates",
            details: [
                "Test Automation Frameworks",
                "CI/CD Pipelines",
                "Regression Testing",
                "Load Optimization (JMeter)"
            ]
        },
        {
            company: "Trinity College Dublin",
            role: "MSc in Computer Science (AR/VR)",
            period: "Sept 2018 – Aug 2019",
            tech: "Python, Unity, ARCore, PyTorch, TensorFlow",
            details: [
                "Dissertation: Bit-rate adaptive streaming of omnidirectional videos",
                "AR app for augmented learning",
                "ML projects with PyTorch"
            ]
        },
        {
            company: "Volvo India Pvt Ltd",
            role: "Senior Software Engineer",
            period: "May 2016 – June 2018",
            tech: "Java, Spring Boot, PostgreSQL, HTML/CSS",
            details: [
                "Full-stack Development",
                "Service Mapping Prototype",
                "SQL Optimization",
                "Enterprise Service Visibility"
            ]
        },
        {
            company: "Volvo India Pvt Ltd",
            role: "Software Engineer",
            period: "July 2013 – April 2016",
            tech: "Java, Spring, Hibernate, PostgreSQL, AngularJS",
            details: [
                "B2B Agile Development",
                "Responsive Web Interfaces",
                "Jenkins CI/CD",
                "Lifecycle Management"
            ]
        },
        {
            company: "Bangalore Institute of Technology",
            role: "Bachelor of Engineering",
            period: "Aug 2009 – June 2013",
            tech: "Computer Science, Java, C++, Data Structures",
            details: [
                "Information Science & Engineering",
                "Cultural Committee President",
                "Cricket Team Member"
            ]
        }
    ],
    projects: [
        {
            id: "01",
            title: "On-Device Cricket Delivery & Pose Detection",
            tech: "Flutter, Dart, ML Kit, FFmpeg, Pose Detection, Edge AI",
            video: "/media/delivery-detection-clips.mp4",
            description: "Architected a high-performance video processing pipeline entirely on-device using <b>Edge Computing</b> principles. Engineered a parallelized 'Consumer-Producer' pipeline for live video ingestion and real-time <b>Cricket Delivery Detection</b> to auto-capture fast-paced action.",
            stats: [
                { label: "Platform", value: "Mobile/Edge" },
                { label: "Latency", value: "Real-time" }
            ]
        },
        {
            id: "02",
            title: "High-Fidelity Cricket Ball Tracking",
            tech: "Python, OpenCV, PyTorch, 3D Reconstruction, Docker",
            video: "/media/tracking_2d.mp4",
            description: "Designed a modular Computer Vision backend to track cricket balls using custom <b>TrackNet Nano</b> architecture. Implemented <b>Monocular Depth Estimation</b> and physics-aware <b>3D Trajectory Reconstruction</b>.",
            stats: [
                { label: "AI Model", value: "Custom CNN" },
                { label: "Scale", value: "Serverless" }
            ]
        },
        {
            id: "03",
            title: "Interactive 3D Video Replay System",
            tech: "Three.js, WebGL, GLSL, Spatial Mapping, Data Viz",
            video: "/media/3d-reconstruction.mp4",
            description: "Created a 'Python-to-Web' visualization bridge generating interactive 3D web replays. Solved complex <b>Coordinate System Transformations</b> to map physical world metric data to <b>WebGL</b> scene graphs for Hawk-Eye style playback.",
            stats: [
                { label: "Render", value: "Three.js" },
                { label: "Mode", value: "Interactive" }
            ]
        },
        {
            id: "04",
            title: "Generative AI Architect Agent",
            tech: "Llama 3 (Local), Stable Diffusion, ControlNet, RAG, Python",
            video: "", // Concept phase
            description: "Developing a <b>Local-First Multimodal Agent</b> that synthesizes architectural layouts from natural language constraints (e.g., '30x40 south-facing plot'). Uses <b>RAG</b> to validate Layouts against building codes and <b>ControlNet</b> to generate structural-aware interior concepts.",
            stats: [
                { label: "Focus", value: "GenAI / CAD" },
                { label: "Status", value: "In Development" }
            ]
        }
    ]
};
