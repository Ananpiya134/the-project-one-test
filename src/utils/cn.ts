import clsx from 'clsx'

import { customTailwindMerge } from '@configs/tailwind-merge'

import type { ClassValue } from 'clsx'

export const cn = (...inputs:ClassValue[]) => customTailwindMerge(clsx(...inputs))