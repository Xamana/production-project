import { Configuration as DevServerConfigurations } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfigurations {
    return {
        port: options.port || 'development',
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
