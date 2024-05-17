import { Metadata } from "next";
import { NotFoundView } from "@/app/components/NotFoundView";

export const metadata: Metadata = {
    title: "404",
};

export default function NotFound() {
    return <NotFoundView />;
}
