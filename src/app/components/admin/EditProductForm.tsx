"use client";

import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import toast from "react-hot-toast";
import { Pencil } from "lucide-react";

const EditProductForm = ({ productId }: { productId: string }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Chair");
  const [image, setImage] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // Fetch existing product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await client.fetch(
          `*[_type == "product" && _id == $productId][0]`,
          { productId }
        );
        if (product) {
          setName(product.name || "");
          setPrice(product.price?.toString() || "");
          setDescription(product.description || "");
          setCategory(product.category || "Chair");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const uploadImageToSanity = async (file: File) => {
    const imageAsset = await client.assets.upload("image", file, {
      contentType: file.type,
      filename: file.name,
    });
    return imageAsset;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      let imageAsset = null;
      if (image) {
        imageAsset = await uploadImageToSanity(image);
      }

      const updatedProductData: {
        name: string;
        price: number;
        description: string;
        category: string;
        image?: { _type: string; asset: { _ref: string } };
      } = {
        name,
        price: Number(price),
        description,
        category,
      };

      if (imageAsset) {
        updatedProductData.image = { _type: "image", asset: { _ref: imageAsset._id } };
      }

      await client.patch(productId).set(updatedProductData).commit();
      toast.success("Product updated successfully!");
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Failed to update product.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="p-2 text-xs rounded-sm  text-white bg-[#FB2E86] hover:bg-transparent hover:border hover:text-[#FB2E86] hover:border-[#FB2E86]">
        <Pencil/>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md space-y-4">
          <DialogTitle className="dark:text-white text-xl font-semibold text-gray-700">
            Edit Product
          </DialogTitle>

          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />

          <textarea
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Chair">Chair</option>
            <option value="Sofa">Sofa</option>
          </select>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
          />

          <DialogFooter>
            <button
              type="submit"
              disabled={isUploading}
              className="w-full py-2 rounded-sm px-4 text-white bg-[#FB2E86]   hover:bg-[#ff63a7] "
            >
              {isUploading ? "Saving Changes..." : "Save Changes"}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProductForm;
