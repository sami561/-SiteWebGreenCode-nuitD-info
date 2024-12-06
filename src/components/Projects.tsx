import React, { useState, useCallback, useTransition, memo } from 'react';
import ProjectCard from './ProjectCard';

const ITEMS_PER_PAGE = 6;

const projectsData = [
  {
    title: "Solar Power Initiative",
    description: "Implementing renewable energy solutions for sustainable future",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276"
  },
  {
    title: "Water Conservation",
    description: "Smart water management systems for reduced consumption",
    image: "https://images.unsplash.com/photo-1468421870903-4df1664ac249"
  },
  {
    title: "Green Building",
    description: "Eco-friendly architecture and sustainable construction",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
  },
  {
    title: "Waste Management",
    description: "Advanced recycling and waste reduction programs",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b"
  },
  {
    title: "Forest Conservation",
    description: "Protecting and restoring natural forest ecosystems",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  {
    title: "Clean Transportation",
    description: "Electric and sustainable mobility solutions",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7"
  },
];

const Projects: React.FC = memo(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isPending, startTransition] = useTransition();
  const totalPages = Math.ceil(projectsData.length / ITEMS_PER_PAGE);

  const handlePageChange = useCallback((page: number) => {
    startTransition(() => {
      setCurrentPage(page);
    });
  }, []);

  const currentProjects = projectsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
        {currentProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <div className="flex justify-center mt-10 space-x-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded-lg ${page === currentPage ? 'bg-green-600 text-white' : 'bg-white text-green-600 border-2 border-green-600'} transition-colors`}
          >
            {page}
          </button>
        ))}
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';
export default Projects;
