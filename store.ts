import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "./types/products";

// Cart Store
export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  deleteCartProduct: (productId: string) => void;
  resetCart: () => void;
  getTotalPrice: () => number;
  getItemCount: (productId: string) => number;
  getGroupedItems: () => CartItem[];
}

// Wishlist Store
export interface WishlistItem {
  product: Product;
}

interface WishlistState {
  wishlistItems: WishlistItem[];
  addWishlistItem: (product: Product) => void;
  removeWishlistItem: (productId: string) => void;
  resetWishlist: () => void;
  getWishlistItems: () => WishlistItem[];
}
type ProfileState = {
  profilePhoto: string | null;
  coverPhoto: string | null;
  setProfilePhoto: (photo: string) => void;
  setCoverPhoto: (photo: string) => void;
};


// const useStore = create<CartState & WishlistState>()(
//   persist(
//     (set, get) => ({
//       // Cart State and Actions
//       items: [],
//       addItem: (product) =>
//         set((state) => {
//           const existingItem = state.items.find(
//             (item) => item.product._id === product._id
//           );
//           if (existingItem) {
//             return {
//               items: state.items.map((item) =>
//                 item.product._id === product._id
//                   ? { ...item, quantity: item.quantity + 1 }
//                   : item
//               ),
//             };
//           } else {
//             return { items: [...state.items, { product, quantity: 1 }] };
//           }
//         }),
//       removeItem: (productId) =>
//         set((state) => ({
//           items: state.items.reduce((acc, item) => {
//             if (item.product._id === productId) {
//               if (item.quantity > 1) {
//                 acc.push({ ...item, quantity: item.quantity - 1 });
//               }
//             } else {
//               acc.push(item);
//             }
//             return acc;
//           }, [] as CartItem[]),
//         })),
//       deleteCartProduct: (productId) =>
//         set((state) => ({
//           items: state.items.filter(
//             ({ product }) => product._id !== productId
//           ),
//         })),
//       resetCart: () => set({ items: [] }),
//       getTotalPrice: () =>
//         get().items.reduce(
//           (total, item) => total + (item.product.price ?? 0) * item.quantity,
//           0
//         ),
//       getItemCount: (productId) => {
//         const item = get().items.find((item) => item.product._id === productId);
//         return item ? item.quantity : 0;
//       },
//       getGroupedItems: () => get().items,

//       // Wishlist State and Actions
//       wishlistItems: [],
//       addWishlistItem: (product) =>
//         set((state) => {
//           const existingItem = state.wishlistItems.find(
//             (item) => item.product._id === product._id
//           );
//           if (!existingItem) {
//             return { wishlistItems: [...state.wishlistItems, { product }] };
//           }
//           return state; // If already in wishlist, do nothing
//         }),
//       removeWishlistItem: (productId) =>
//         set((state) => ({
//           wishlistItems: state.wishlistItems.filter(
//             ({ product }) => product._id !== productId
//           ),
//         })),
//       resetWishlist: () => set({ wishlistItems: [] }),
//       getWishlistItems: () => get().wishlistItems,
//     }),
//     { name: "store" }
//   )
// );

// export default useStore;
const useStore = create<CartState & WishlistState & ProfileState & { email: string; setEmail: (email: string) => void; clearUser: () => void }>()(
  persist(
    (set,get) => ({
      // Login State and Actions
      email: '',
      setEmail: (email) => set({ email }),
      clearUser: () => set({ email: '' }),

      profilePhoto: null,
      coverPhoto: null,
      setProfilePhoto: (photo) => set({ profilePhoto: photo }),
      setCoverPhoto: (photo) => set({ coverPhoto: photo }),

      // Cart State and Actions
      items: [],
      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.product._id === product._id);
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
              ),
            };
          } else {
            return { items: [...state.items, { product, quantity: 1 }] };
          }
        }),
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.reduce((acc, item) => {
            if (item.product._id === productId) {
              if (item.quantity > 1) {
                acc.push({ ...item, quantity: item.quantity - 1 });
              }
            } else {
              acc.push(item);
            }
            return acc;
          }, [] as CartItem[]),
        })),
      deleteCartProduct: (productId) =>
        set((state) => ({
          items: state.items.filter(({ product }) => product._id !== productId),
        })),
      resetCart: () => set({ items: [] }),
      getTotalPrice: () =>
        get().items.reduce((total, item) => total + (item.product.price ?? 0) * item.quantity, 0),
      getItemCount: (productId) => {
        const item = get().items.find((item) => item.product._id === productId);
        return item ? item.quantity : 0;
      },
      getGroupedItems: () => get().items,

      // Wishlist State and Actions
      wishlistItems: [],
      addWishlistItem: (product) =>
        set((state) => {
          const existingItem = state.wishlistItems.find((item) => item.product._id === product._id);
          if (!existingItem) {
            return { wishlistItems: [...state.wishlistItems, { product }] };
          }
          return state;
        }),
      removeWishlistItem: (productId) =>
        set((state) => ({
          wishlistItems: state.wishlistItems.filter(({ product }) => product._id !== productId),
        })),
      resetWishlist: () => set({ wishlistItems: [] }),
      getWishlistItems: () => get().wishlistItems,
    }),
    { name: 'store' }
  )
);

export default useStore;
