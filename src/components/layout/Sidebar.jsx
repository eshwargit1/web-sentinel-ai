import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import ShieldIcon from "@/components/icons/ShieldIcon.jsx";
import {
  LayoutDashboard,
  History,
  FileText,
  Settings,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/history", label: "Scan History", icon: History },
  { path: "/reports", label: "Reports", icon: FileText },
  { path: "/settings", label: "Settings", icon: Settings },
];

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen bg-sidebar border-r border-sidebar-border transition-transform duration-300",
          "w-[280px] xs:w-64 sm:w-56 md:w-60 lg:w-56 xl:w-64",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 border-b border-sidebar-border">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <ShieldIcon className="text-primary flex-shrink-0" size={24} />
              <span className="font-semibold text-foreground text-sm sm:text-base lg:text-lg truncate">
                SITE SHIELD AI
              </span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-md hover:bg-sidebar-accent transition-colors text-sidebar-foreground hover:text-foreground flex-shrink-0"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-2 sm:p-3 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={cn(
                    "flex items-center gap-2 sm:gap-3 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg transition-all duration-200 text-sm sm:text-base",
                    isActive
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground"
                  )}
                >
                  <Icon size={18} className="flex-shrink-0 sm:w-5 sm:h-5" />
                  <span className="font-medium truncate">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
