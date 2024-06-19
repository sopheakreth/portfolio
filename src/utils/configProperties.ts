import config from './config';

export const getRootPath = (): string => {
    return config.VITE_ROOT_PATH != null ? config.VITE_ROOT_PATH : "";
}