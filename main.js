import { resumeData } from './src/data.js';

// Render About
document.querySelector('#about').innerHTML = `
    <h2>ABOUT</h2>
    <p>${resumeData.summary.replace(/\n\n/g, '</p><p>')}</p>
`;

// Render Projects
const projectsContainer = document.querySelector('#projects');
const projectsHTML = resumeData.projects.map(p => `
    <div class="project-card">
        <div class="card-header">
            <span class="project-id">${p.id}</span>
            <span class="icon">↗</span>
        </div>
        <div class="project-title">${p.title}</div>
        <div class="project-tech">// ${p.tech}</div>
        <div class="project-desc">${p.description}</div>
        <div class="project-stats">
            ${p.stats.map(s => `
                <div class="stat-item">
                    <span class="stat-label">${s.label}</span>
                    <span class="stat-value">${s.value}</span>
                </div>
            `).join('')}
        </div>
    </div>
`).join('');

projectsContainer.innerHTML = `
    <div class="section-header">
        <span>PROJECTS</span>
        <span class="section-label">SELECTED PROJECTS</span>
    </div>
    <div class="projects-grid">
        ${projectsHTML}
    </div>
`;

// Modal Logic
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

// Close Modal Event
closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Close outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

// Add click listeners to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.querySelector('.project-id').textContent;
        const project = resumeData.projects.find(p => p.id === projectId);

        if (project) {
            // Check if video exists (in a real app, you might want to check if file loads, but here we just check property)
            // For now, let's assume if the user puts a video path, they want to show it.
            // We can also double check if it's a dummy path or real.

            let mediaContent = '';
            if (project.video) {
                mediaContent = `
                    <video autoplay loop muted playsinline controls class="modal-video" onerror="console.error('Video Error:', this.error ? this.error.message : 'Unknown', 'Code:', this.error ? this.error.code : '', 'Src:', this.currentSrc)">
                        <source src="${project.video}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                `;
            } else {
                mediaContent = `
                    <div class="modal-media-placeholder">
                        [ Visual Media / GIF Placeholder for ${project.title} ]
                    </div>
                 `;
            }

            modalBody.innerHTML = `
                <div class="modal-title">${project.title}</div>
                <div class="modal-tech">// ${project.tech}</div>
                <div class="modal-media-container">
                   ${mediaContent}
                </div>
                <div class="modal-description">${project.description}</div>
                <div class="modal-stats">
                    ${project.stats.map(s => `
                        <div class="stat-item">
                            <span class="stat-label">${s.label}</span>
                            <span class="stat-value">${s.value}</span>
                        </div>
                    `).join('')}
                </div>
            `;

            // Post-render logic for video orientation
            const videoEl = modalBody.querySelector('video');
            if (videoEl) {
                videoEl.onloadedmetadata = function () {
                    if (this.videoHeight > this.videoWidth) {
                        this.classList.add('portrait');
                        this.parentElement.classList.add('portrait');
                    }
                };
            }

            modal.classList.remove('hidden');
        }
    });
});

// Render Experience
const xpContainer = document.querySelector('#experience');
const xpHTML = resumeData.experience.map(job => `
    <div class="timeline-item">
        <div class="role-header">
            <div class="role-title">${job.role}</div>
            <div class="role-meta">${job.company} | ${job.period}</div>
            <div class="role-tech">[Stack: ${job.tech}]</div>
        </div>
        <div class="role-keywords">
            ${job.details.map(d => `<span class="keyword-tag">${d}</span>`).join('')}
        </div>
    </div>
`).join('');

xpContainer.innerHTML = `
    <div class="section-header">
        <span>TRACE</span>
        <span class="section-label">EXPERIENCE HISTORY</span>
    </div>
    <div class="timeline">
        ${xpHTML}
    </div>
`;

// Render Contact
document.querySelector('#contact').innerHTML = `
    <div class="section-header" style="justify-content: center; border: none;">
        <span>INITIATE CONTACT</span>
    </div>
    <div class="contact-links">
        <a href="mailto:${resumeData.contact.email}" class="contact-link">EMAIL</a>
        <a href="${resumeData.contact.linkedin}" target="_blank" class="contact-link">LINKEDIN</a>
        <a href="${resumeData.contact.github}" target="_blank" class="contact-link">GITHUB</a>
    </div>
`;
