'use client';

import { useEffect } from 'react';

interface BodyClassProps {
  className: string;
}

export default function BodyClass({ className }: BodyClassProps) {
  useEffect(() => {
    document.body.className = className;
  }, [className]);

  return null;
}
