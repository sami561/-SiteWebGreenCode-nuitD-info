import React, { memo } from 'react';
import { ArrowRight } from 'lucide-react';
import LazyImage from './LazyImage';
import { getOptimizedImageUrl } from '../utils/imageLoader';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = memo(({ title, description, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <LazyImage
          src={getOptimizedImageUrl(image)}
          alt={title}
          width={800}
          height={450}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
          aria-label={`Learn more about ${title}`}
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;
