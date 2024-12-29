import React, { useMemo } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarInset,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Shield, UploadCloud, ChartLine, LogOut } from "lucide-react";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../config/firebase";

const Appsidebar = ({
  children,
  first,
  second,
}: {
  children: React.ReactNode;
  first: string;
  second: string;
}) => {
  const router = useRouter();
  const auth = getAuth(app);

  const sidebarItems = useMemo(
    () => [
      { title: "Upload", url: "/upload", icon: UploadCloud, isActive: false },
      {
        title: "Security",
        url: "/security-view",
        icon: Shield,
        isActive: false,
      },
      {
        title: "Analytics",
        url: "/analytics",
        icon: ChartLine,
        isActive: false,
      },
    ],
    []
  );

  const handleNavigation = (url: string) => {
    router.push(url);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Threatdriod</SidebarGroupLabel>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={item.isActive}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        aria-label={item.title}
                        tooltip={item.title}
                        onClick={() => handleNavigation(item.url)}
                      >
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
        <SidebarFooter>
          <SidebarMenuButton
            aria-label="Sign out"
            tooltip="Sign out"
            onClick={handleSignOut}
          >
            <LogOut />
            <span>Sign out</span>
          </SidebarMenuButton>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header
          className="flex h-16 shrink-0 items-center gap-2 "
          style={{ backgroundColor: "white", zIndex: 1 }}
        >
          <div className="flex items-center gap-2 px-4 fixed w-full bg-white h-16">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#" aria-label={first}>
                    {first}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{second}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="min-h-screen w-full flex dark:bg-neutral-900">
          {children}
        </div>
      </SidebarInset>
    </>
  );
};

export default Appsidebar;
