"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
    user: string;
    setUser: (user: string) => void;
    items: string[];
    setItems: (items: string[]) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    return (
        <AppContext.Provider value={{ user, setUser, items, setItems }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextProps => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};