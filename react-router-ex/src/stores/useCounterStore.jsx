import { create } from 'zustand';
import { persist } from 'zustand/middleware'

const initialState = { count: 0 };

const useCounterStore = create(persist((set) => ({
    ...initialState,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    resetCount: () => set({ count: 0 })
}),
    {
        name: 'counter-storage',
        getStorage: () => localStorage,
    }
));

export default useCounterStore;