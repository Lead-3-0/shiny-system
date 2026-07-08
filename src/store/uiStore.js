import { create } from 'zustand'

const useUIStore = create((set) => ({
  // Sidebar
  sidebarOpen: true,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  // Modals
  modals: {},
  openModal: (modalId) =>
    set((state) => ({
      modals: { ...state.modals, [modalId]: true },
    })),
  closeModal: (modalId) =>
    set((state) => ({
      modals: { ...state.modals, [modalId]: false },
    })),

  // Theme
  theme: localStorage.getItem('theme') || 'light',
  setTheme: (theme) => {
    localStorage.setItem('theme', theme)
    set({ theme })
  },

  // Notifications
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        {
          id: Date.now(),
          ...notification,
        },
      ],
    })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),

  // Editor state
  zoomLevel: 1,
  setZoomLevel: (zoom) => set({ zoomLevel: zoom }),
  panPosition: { x: 0, y: 0 },
  setPanPosition: (position) => set({ panPosition: position }),
}))

export default useUIStore
