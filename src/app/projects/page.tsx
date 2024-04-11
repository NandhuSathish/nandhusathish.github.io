import { type Metadata } from 'next';
import Image from 'next/image';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import logoZelt from '@/images/logos/zelt.png';
import logoCf from '@/images/logos/cf.png';

const projects = [
  {
    name: 'Zelt',
    description:
      'Recreated the Awwwards winning website Zelt using React and Tailwind CSS and Framer motion.',
    link: {
      href: 'https://nandhusathish.github.io/zelt_clone/',
      label: 'zelt',
    },
    logo: logoZelt,
  },
  {
    name: 'Cyberfication*',
    description:
      'Recreated the Awwwards winning website Cyberfication* using HTML and Tailwind CSS and JavaScript.',
    link: {
      href: 'https://nandhusathish.github.io/cyberfication_clone/',
      label: 'Cyberfication',
    },
    logo: logoCf,
  },
];

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}
function GithubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M8,0C3.6,0,0,3.6,0,8c0,3.526,2.315,6.534,5.498,7.591c0.377,0.055,0.52-0.179,0.52-0.385c0-0.19-0.007-0.693-0.011-1.361	c-2.225,0.483-2.695-1.072-2.695-1.072c-0.364-0.924-0.888-1.17-0.888-1.17c-0.726-0.496,0.055-0.486,0.055-0.486	c0.803,0.057,1.225,0.824,1.225,0.824c0.714,1.223,1.872,0.87,2.328,0.665c0.073-0.517,0.279-0.87,0.508-1.069	c-1.776-0.202-3.644-0.888-3.644-3.954c0-0.873,0.312-1.587,0.823-2.147C3.637,5.233,3.362,4.419,3.798,3.318	c0,0,0.672-0.215,2.2,0.82C6.636,3.961,7.32,3.872,8,3.869c0.679,0.003,1.364,0.092,2.003,0.269c1.527-1.035,2.198-0.82,2.198-0.82	c0.436,1.101,0.162,1.915,0.08,2.117c0.513,0.559,0.822,1.273,0.822,2.147c0,3.073-1.87,3.75-3.653,3.948	c0.287,0.247,0.543,0.735,0.543,1.482c0,1.07-0.01,1.932-0.01,2.195c0,0.208,0.141,0.443,0.521,0.385C13.686,14.532,16,11.526,16,8	C16,3.6,12.4,0,8,0z"
        fill="currentColor"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
};

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my mark in the digital universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <Card.Link href={project.link?.href ?? '#'} target="_blank">
              {project.name}
            </Card.Link>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none mr-2" />
              <span className="ml-2">{project.link?.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
}
