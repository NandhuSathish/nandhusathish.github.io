'use client';

import { cn } from '@/utils/cn';
import React, { useEffect, useState } from 'react';
import Image, { type ImageProps } from 'next/image';

import logoReact from '@/images/logos/react.png';
import logoAngular from '@/images/logos/angular.png';
import logoMongodb from '@/images/logos/mongodb.png';
import logoMysql from '@/images/logos/mysql.png';
import logoNode from '@/images/logos/node.png';
import logoExpress from '@/images/logos/express.png';
import logoHtml from '@/images/logos/html.png';
import logoJs from '@/images/logos/js.png';
import logoCss from '@/images/logos/css.png';
import logoNextjs from '@/images/logos/nextjs.png';
import logoRedux from '@/images/logos/redux.png';
import logoRedis from '@/images/logos/redis.png';
import logoDocker from '@/images/logos/docker.png';
import logoTypescript from '@/images/logos/typescript.png';
import logoSocket from '@/images/logos/socket.png';
import logoGitlab from '@/images/logos/gitlab.png';
import logoJenkins from '@/images/logos/jenkins.png';
import logoPhotoshop from '@/images/logos/photoshop.png';
import logoFigma from '@/images/logos/figma.png';

export const InfiniteMovingCards = ({
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };

  let items = [
    {
      name: 'Nextjs',
      logo: logoNextjs,
    },
    {
      name: 'React',
      logo: logoReact,
    },
    {
      name: 'Redux',
      logo: logoRedux,
    },
    {
      name: 'Angular',
      logo: logoAngular,
    },
    {
      name: 'Node',
      logo: logoNode,
    },
    {
      name: 'Express',
      logo: logoExpress,
    },
    {
      name: 'Redis',
      logo: logoRedis,
    },
    {
      name: 'Socket',
      logo: logoSocket,
    },
    {
      name: 'MongoDb',
      logo: logoMongodb,
    },
    {
      name: 'Mysql',
      logo: logoMysql,
    },
    {
      name: 'Html',
      logo: logoHtml,
    },
    {
      name: 'Css',
      logo: logoCss,
    },

    {
      name: 'Js',
      logo: logoJs,
    },
    {
      name: 'Ts',
      logo: logoTypescript,
    },
    {
      name: 'Docker',
      logo: logoDocker,
    },
    {
      name: 'Gitlab',
      logo: logoGitlab,
    },
    {
      name: 'Jenkins',
      logo: logoJenkins,
    },
    {
      name: 'Photoshop',
      logo: logoPhotoshop,
    },
    {
      name: 'Figma',
      logo: logoFigma,
    },
  ];
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <li className="px-8" key={item.name}>
            <Image
              // key={item.name}
              src={item.logo}
              alt=""
              className="h-10 w-10 "
              unoptimized
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
