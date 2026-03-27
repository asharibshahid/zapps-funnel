/**
 * Solution Navigation Utilities
 * Maps problem solution IDs to actual solution page paths
 */

export const SOLUTION_PATH_MAP: Record<string, string> = {
  'websites': '/solutions/websites',
  'systems': '/solutions/systems',
  'apps': '/solutions/ecommerce',
  'ai-automation': '/solutions/ai-automation',
  'ecommerce': '/solutions/ecommerce',
  'ai': '/solutions/ai-automation',
  'web-app': '/solutions/websites',
};

export function getSolutionPath(solutionId: string): string {
  return SOLUTION_PATH_MAP[solutionId] || '/solutions';
}

export function navigateToSolution(router: any, solutionId: string): void {
  const path = getSolutionPath(solutionId);
  router.push(path);
}
