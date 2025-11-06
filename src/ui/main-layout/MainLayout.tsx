import type {ReactNode} from "react";

type LayoutProps = {
    children: ReactNode
}

const MainLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex flex-col gap-2"}>
            {children}
        </div>
    );
};

export default MainLayout;