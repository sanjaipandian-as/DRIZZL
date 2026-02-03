'use client';

import { useEffect } from 'react';

export default function ContentProtection() {
    useEffect(() => {
        // Prevent right-click context menu
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        // Prevent standard drag behaviors if CSS fails
        const handleDragStart = (e: DragEvent) => {
            if (e.target instanceof HTMLImageElement || e.target instanceof HTMLVideoElement) {
                e.preventDefault();
            }
        };

        // Prevent standard developer tools keyboard shortcuts
        const handleKeyDown = (e: KeyboardEvent) => {
            // F12
            if (e.key === 'F12') {
                e.preventDefault();
            }
            // Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Inspect Element)
            if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
                e.preventDefault();
            }
            // Ctrl+U (View Source)
            if (e.ctrlKey && e.key === 'u') {
                e.preventDefault();
            }
        };

        // document.addEventListener('contextmenu', handleContextMenu);
        // document.addEventListener('dragstart', handleDragStart);
        // document.addEventListener('keydown', handleKeyDown);

        return () => {
            // document.removeEventListener('contextmenu', handleContextMenu);
            // document.removeEventListener('dragstart', handleDragStart);
            // document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return null;
}
