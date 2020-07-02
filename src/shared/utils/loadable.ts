import loadable from '@loadable/component';
import Loading from '../components/loading';

export default (loader: any, loading = Loading) => {
    return loadable(loader, {
        loading: loading,
    });
};
