import React from "react";
import AppwriteService from "@/services/AppwriteService";

const AppwriteContext = React.createContext<AppwriteService | null>(null);

export default AppwriteContext;
