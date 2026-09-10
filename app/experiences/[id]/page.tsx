import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ExperienceDetail from "../../../components/ExperienceDetail";
import { MOCK_EXPERIENCES } from "../../../data/experiences";

interface ExperiencePageProps {
	params: Promise<{ id: string }>;
}

function getExperience(id: string) {
	return MOCK_EXPERIENCES.find((experience) => experience.id === id);
}

export async function generateMetadata({
	params,
}: ExperiencePageProps): Promise<Metadata> {
	const { id } = await params;
	const experience = getExperience(id);

	if (!experience) {
		return { title: "Experiencia no encontrada" };
	}

	return {
		title: `${experience.name} | Wanderlust`,
		description: experience.description,
	};
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
	const { id } = await params;
	const experience = getExperience(id);

	if (!experience) {
		notFound();
	}

	return <ExperienceDetail experience={experience} />;
}
