import Icon from '../assets/images/icon.png'
import { LayoutProps } from '../types/layout';

const LayoutError: React.FC<LayoutProps> = ({ children }): JSX.Element => {
    return (
        <div id="layout-error" className="flex justify-center items-center min-h-screen">
            <main className="w-3/4 flex flex-col justify-center items-center gap-10">
            <img src={Icon} alt="logo" width="75" height="75" className="rounded border border-base-100"/>
            <div className="flex flex-col justify-center items-center gap-10">{children}</div>
            </main>
        </div>
    );
};

export default LayoutError;
