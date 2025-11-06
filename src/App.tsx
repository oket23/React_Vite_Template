import HelloText from "@/components/HelloText.tsx";
import MainLayout from "@/ui/main-layout/MainLayout.tsx";

export default function App() {
	return (
        <MainLayout>
            <HelloText text="React" isRed={true}/>
        </MainLayout>

	)
}