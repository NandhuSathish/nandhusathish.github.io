import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons';
import portraitImage from '@/images/portrait.jpg';

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        target="_blank"
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Nandhu Sathish. Developer from Kerala, India.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Those ancient school computers ignited my passion for the digital
              realm and coding. However, my greatest love was the rich,
              multi-layered storytelling of Malayalam cinema. I wasn&apos;t
              content just consuming tales - I hungered to explore each
              narrative from every character&apos;s perspective, understanding
              their unique motivations and how they shaped the arc.
            </p>
            <p>
              Though confined to my realm, I channeled that fervor into coding,
              forever inspired by those cinematic visions. Each roadblock became
              another dramatic plot twist that relentless skill-refining
              overcame. Just like studying the intricate tapestries of films
              enhances our understanding through the hero&apos;s journey, the
              villain&apos;s descent, the mentor&apos;s wisdom - each new
              vantage point illuminated angles I may have overlooked.
            </p>
            <p>
              Today, that zeal drives me to wield tech as a vessel for brilliant
              storytelling. Writing code is simply narrating to the computer -
              variables are characters, functions are events, loops are
              repeating story arcs propelling it forward. Why settle for
              ordinary when we can craft extraordinarily creative and delightful
              epics?
            </p>
            <p>
              This endless exploration of alternative perspectives is more than
              a passion - it&apos;s what allows me to deconstruct monolithic
              coding challenges into strategic, manageable chunks. The biggest
              roadblocks are like icebergs, with their true complexity lying
              beneath the surface. By constantly shifting my view, I gain
              insights that reveal the underlying currents to navigate.
            </p>
            <p>
              So let&apos;s unite on an electrifying quest to merge maximum
              entertainment and innovation. With our codes as magic wands, our
              dreams as source material, and our storytelling prowess,
              we&apos;ll construct spellbinding tales like no other! The
              world&apos;s our stage to dazzle as tech-savvy storytellers.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/nandhu_zathish" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/nandhu_sathish/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/NandhuSathish"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/nandhu-sathish/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:writetonandhusathishr@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              writetonandhusathish@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
