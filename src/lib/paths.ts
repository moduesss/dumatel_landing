export const getBasePath = () => process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const withBasePath = (path: string) => {
  if (!path.startsWith("/")) {
    return path;
  }

  const basePath = getBasePath();
  return `${basePath}${path}`;
};
