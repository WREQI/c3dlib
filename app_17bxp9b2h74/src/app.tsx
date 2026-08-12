import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import HomePage from "@/pages/HomePage/HomePage";
import WhyOnshapePage from "@/pages/WhyOnshapePage/WhyOnshapePage";
import PricingPage from "@/pages/PricingPage/PricingPage";
import FeaturePageTemplate from "@/components/FeaturePageTemplate";
import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import BlogPage from "@/pages/Resources/BlogPage";
import CaseStudiesPage from "@/pages/Resources/CaseStudiesPage";
import VideosPage from "@/pages/Resources/VideosPage";
import EventsPage from "@/pages/Resources/EventsPage";
import CoursesPage from "@/pages/Resources/CoursesPage";
import TechTipsPage from "@/pages/Resources/TechTipsPage";
import DocumentationPage from "@/pages/Resources/DocumentationPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import ProductOverviewPage from "@/pages/ProductOverviewPage/ProductOverviewPage";
import ContactPage from "@/pages/ContactPage/ContactPage";
import AboutPage from "@/pages/AboutPage/AboutPage";
import CareersPage from "@/pages/CareersPage/CareersPage";
import BlogDetailPage from "@/pages/Resources/BlogDetailPage";
import ResourceCenterPage from "@/pages/Resources/ResourceCenterPage";
import MigratingCadDataPage from "@/pages/Resources/MigratingCadDataPage";
import SpotlightPage from "@/pages/Resources/SpotlightPage";
import AppsIntegrationsPage from "@/pages/Resources/AppsIntegrationsPage";
import CadSignInPage from "@/pages/cad/CadSignInPage";
import CadDocumentsPage from "@/pages/cad/CadDocumentsPage";
import CadPublicPage from "@/pages/cad/CadPublicPage";
import CadEditorPage from "@/pages/cad/CadEditorPage";
import CadRecentlyOpenedPage from "@/pages/cad/CadRecentlyOpenedPage";
import CadCreatedByMePage from "@/pages/cad/CadCreatedByMePage";
import CadSharedWithMePage from "@/pages/cad/CadSharedWithMePage";
import CadTrashPage from "@/pages/cad/CadTrashPage";
import CadAccountPage from "@/pages/cad/CadAccountPage";
import CadAssemblyPage from "@/pages/cad/CadAssemblyPage";
import CadDrawingPage from "@/pages/cad/CadDrawingPage";
import CadExplorePage from "@/pages/cad/CadExplorePage";
import CadLayout from "@/components/cad/CadLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="why-onshape" element={<WhyOnshapePage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="features/:slug" element={<FeaturePageTemplate />} />
        <Route path="solutions/:slug" element={<SolutionPageTemplate />} />
        <Route path="resources/blog" element={<BlogPage />} />
        <Route path="resources/case-studies" element={<CaseStudiesPage />} />
        <Route path="resources/videos" element={<VideosPage />} />
        <Route path="resources/events" element={<EventsPage />} />
        <Route path="resources/courses-training" element={<CoursesPage />} />
        <Route path="resources/tech-tips" element={<TechTipsPage />} />
        <Route path="resources/documentation" element={<DocumentationPage />} />
        <Route path="resources/resource-center" element={<ResourceCenterPage />} />
        <Route path="resources/blog/:slug" element={<BlogDetailPage />} />
        <Route path="product" element={<ProductOverviewPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="resources/migrating-cad-data" element={<MigratingCadDataPage />} />
        <Route path="resources/spotlight" element={<SpotlightPage />} />
        <Route path="resources/apps-integrations" element={<AppsIntegrationsPage />} />
      </Route>
      {/* CAD 内部应用 - 独立 Layout，无营销站 Header/Footer */}
      <Route path="cad/signin" element={<CadSignInPage />} />
      <Route path="cad" element={<CadLayout />}>
        <Route path="explore" element={<CadExplorePage />} />
        <Route path="documents" element={<CadDocumentsPage />} />
        <Route path="documents/recently-opened" element={<CadRecentlyOpenedPage />} />
        <Route path="documents/created-by-me" element={<CadCreatedByMePage />} />
        <Route path="documents/shared-with-me" element={<CadSharedWithMePage />} />
        <Route path="documents/public" element={<CadPublicPage />} />
        <Route path="documents/trash" element={<CadTrashPage />} />
        <Route path="account" element={<CadAccountPage />} />
      </Route>
      <Route path="cad/document/:id" element={<CadEditorPage />} />
      <Route path="cad/document/:id/assembly" element={<CadAssemblyPage />} />
      <Route path="cad/document/:id/drawing" element={<CadDrawingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
