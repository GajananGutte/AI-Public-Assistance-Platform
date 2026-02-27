import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { FileComplaint } from "./pages/FileComplaint";
import { TrackComplaints } from "./pages/TrackComplaints";
import { Translator } from "./pages/Translator";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "file-complaint", Component: FileComplaint },
      { path: "track-complaints", Component: TrackComplaints },
      { path: "translator", Component: Translator },
      { path: "*", Component: NotFound },
    ],
  },
]);
