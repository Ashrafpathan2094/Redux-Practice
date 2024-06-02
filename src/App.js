import React, { useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import Checkout from "./components/Checkout/Checkout";
import { useSelector } from "react-redux";
import { selectCart } from "./store/slices/cart/cartSlice";

const App = () => {
  const [products, setProducts] = useState([
    {
      tags: [
        "accessories",
        "bangles",
        "jaipur",
        "lac",
        "lac bangles",
        "rajasthan",
        "UX_TAG_HURRY",
        "women",
      ],
      price: {
        amount: "650.0",
        currencyCode: "INR",
      },
      title: "Lac Izna Bangles Set of 8",
      handle: "izna-lac-bangles-s-set-of-8",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41104608231722",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER-399_79d32c7e-46f6-4003-9554-58623097c7a1.jpg?v=1680693244",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER-399_79d32c7e-46f6-4003-9554-58623097c7a1.jpg?v=1680693244",
              width: 1600,
              height: 1600,
              altText: null,
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER-399_79d32c7e-46f6-4003-9554-58623097c7a1.jpg?v=1680693244",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER-399_79d32c7e-46f6-4003-9554-58623097c7a1.jpg?v=1680693244",
            },
            cursor: "eyJsYXN0X2lkIjo0MTEwNDYwODIzMTcyMiwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41104608231722",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER-399_79d32c7e-46f6-4003-9554-58623097c7a1.jpg?v=1680693244",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER-399_79d32c7e-46f6-4003-9554-58623097c7a1.jpg?v=1680693244",
            width: 1600,
            height: 1600,
            altText: null,
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER-399_79d32c7e-46f6-4003-9554-58623097c7a1.jpg?v=1680693244",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER-399_79d32c7e-46f6-4003-9554-58623097c7a1.jpg?v=1680693244",
          },
        ],
      },
      quantity: 9,
      attributes: [
        {
          name: "Size",
          value: "2.6",
        },
        {
          name: "Material",
          value: "Pure lac",
        },
        {
          name: "Color",
          value: "Colours on the actual product may vary slightly.",
        },
      ],
      description:
        "These famous Lac Izna Bangles of Jaipur are as old as the city itself. In the year 1727 CE, the then ruler Maharaja Sawai Jai Singh II, was very keen on making Jaipur a centre for craftsmen and artisans and so he invited lac bangle craftsmen from Rajasthan, Uttar Pradesh and Madhya Pradesh. Lac is the natural resin secreted by a tiny insect collected from trees. The skilled craftsmen then transform this into lac coils to create attractive bangles out it. This is a set of handmade lac bangles of Jaipur with radiant wave-like patterns. The Lac Izna Bangles are authentic and have been sourced directly from the local Jaipuri artisans. Quantity: Set of 8 bangles Care instructions: Lac is delicate, handle with care.Lac is delicate, handle with care.",
    },
    {
      tags: ["accessories", "UX_TAG_BEST_SELLER"],
      price: {
        amount: "350.0",
        currencyCode: "INR",
      },
      title: "Lac Eira bangles Set of 8",
      handle: "eira-lac-bangles-s-set-of-8",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41104607150378",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210707_113433-260_e06dbbec-8811-4418-add5-d5754b85b944.jpg?v=1680693242",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210707_113433-260_e06dbbec-8811-4418-add5-d5754b85b944.jpg?v=1680693242",
              width: 1600,
              height: 1600,
              altText: null,
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210707_113433-260_e06dbbec-8811-4418-add5-d5754b85b944.jpg?v=1680693242",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210707_113433-260_e06dbbec-8811-4418-add5-d5754b85b944.jpg?v=1680693242",
            },
            cursor: "eyJsYXN0X2lkIjo0MTEwNDYwNzE1MDM3OCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41104607150378",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210707_113433-260_e06dbbec-8811-4418-add5-d5754b85b944.jpg?v=1680693242",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210707_113433-260_e06dbbec-8811-4418-add5-d5754b85b944.jpg?v=1680693242",
            width: 1600,
            height: 1600,
            altText: null,
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210707_113433-260_e06dbbec-8811-4418-add5-d5754b85b944.jpg?v=1680693242",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210707_113433-260_e06dbbec-8811-4418-add5-d5754b85b944.jpg?v=1680693242",
          },
        ],
      },
      quantity: 27,
      attributes: [
        {
          name: "Size",
          value: "2.6",
        },
        {
          name: "Material",
          value: "Pure lac on metal",
        },
        {
          name: "Color",
          value: "Colours on the actual product may vary slightly.",
        },
      ],
      description:
        "The famous lac bangles of Jaipur are as old as the city itself. In the year 1727 CE, the then ruler Maharaja Sawai Jai Singh II, was very keen on making Jaipur a centre for craftsmen and artisans and so he invited lac bangle craftsmen from Rajasthan, Uttar Pradesh and Madhya Pradesh.Lac is the natural resin secreted by a tiny insect collected from trees. The skilled craftsmen then transform this into lac coils to create attractive bangles out it.This is an elegant set of handmade bangles with lac on metal. The bangles are authentic and have been sourced directly from the local Jaipuri artisans. Quantity: Set of 8 bangles Care instructions: Lac is delicate, handle with care.",
    },
    {
      tags: [
        "accessories",
        "bangles",
        "jaipur",
        "jaipuri bangles",
        "lac",
        "lac bangles",
        "UX_TAG_HURRY",
        "women",
      ],
      price: {
        amount: "2897.0",
        currencyCode: "INR",
      },
      title: "Lac Cocoa Swirl Bangles Set of 8",
      handle: "cocoa-swirl-lac-bangles-s-set-of-8",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41104605315370",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER-786_1.jpg?v=1680693234",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER-786_1.jpg?v=1680693234",
              width: 1600,
              height: 1600,
              altText: null,
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER-786_1.jpg?v=1680693234",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER-786_1.jpg?v=1680693234",
            },
            cursor: "eyJsYXN0X2lkIjo0MTEwNDYwNTMxNTM3MCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41104605315370",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER-786_1.jpg?v=1680693234",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER-786_1.jpg?v=1680693234",
            width: 1600,
            height: 1600,
            altText: null,
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER-786_1.jpg?v=1680693234",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER-786_1.jpg?v=1680693234",
          },
        ],
      },
      quantity: 20,
      attributes: [
        {
          name: "Size",
          value: "2.6",
        },
        {
          name: "Material",
          value: "Pure lac on metal",
        },
        {
          name: "Color",
          value: "Colours on the actual product may vary slightly.",
        },
      ],
      description:
        "The famous Lac Cocoa Swirl Bangles of Jaipur are as old as the city itself. In the year 1727 CE, the then ruler Maharaja Sawai Jai Singh II, was very keen on making Jaipur a centre for craftsmen and artisans and so he invited lac bangle craftsmen from Rajasthan, Uttar Pradesh and Madhya Pradesh. Lac is the natural resin secreted by a tiny insect collected from trees. The skilled craftsmen then transform this into lac coils to create attractive bangles out it. This is an elegant set of black and antique gold Cocoa Swirl Bangles with lac on metal. The bangles are authentic and have been sourced directly from the local Jaipuri artisans. Quantity: Set of 8 bangles Care instructions: Lac is delicate, handle with care.",
    },
    {
      tags: [
        "accessories",
        "ANKUR1",
        "ANKUR_1_2",
        "bridal",
        "bridal blue",
        "firozi",
        "handmade",
        "jaipuri",
        "lac",
        "lac bangles",
        "rajasthan",
        "UX_TAG_BEST_SELLER",
        "UX_TAG_TRENDING",
        "women",
      ],
      price: {
        amount: "1.0",
        currencyCode: "INR",
      },
      title: "Lac Firozi Swirl Bangles Set of 8",
      handle: "firozi-swirl-lac-bangles-s-set-of-8",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41104607412522",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/5-988_290a1252-8531-4e7b-8730-c5934c50acfc.jpg?v=1687422123",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/5-988_290a1252-8531-4e7b-8730-c5934c50acfc.jpg?v=1687422123",
              width: 1600,
              height: 1600,
              altText: null,
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/5-988_290a1252-8531-4e7b-8730-c5934c50acfc.jpg?v=1687422123",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/5-988_290a1252-8531-4e7b-8730-c5934c50acfc.jpg?v=1687422123",
            },
            cursor: "eyJsYXN0X2lkIjo0MTEwNDYwNzQxMjUyMiwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41104607412522",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/5-988_290a1252-8531-4e7b-8730-c5934c50acfc.jpg?v=1687422123",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/5-988_290a1252-8531-4e7b-8730-c5934c50acfc.jpg?v=1687422123",
            width: 1600,
            height: 1600,
            altText: null,
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/5-988_290a1252-8531-4e7b-8730-c5934c50acfc.jpg?v=1687422123",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/5-988_290a1252-8531-4e7b-8730-c5934c50acfc.jpg?v=1687422123",
          },
        ],
      },
      quantity: 6,
      attributes: [
        {
          name: "Size",
          value: "2.6",
        },
        {
          name: "Material",
          value: "Pure lac on metal",
        },
        {
          name: "Color",
          value: "Colours on the actual product may vary slightly.",
        },
      ],
      description:
        "These famous Lac Firozi Swirl Bangles of Jaipur are as old as the city itself. In the year 1727 CE, the then ruler Maharaja Sawai Jai Singh II, was very keen on making Jaipur a centre for craftsmen and artisans and so he invited lac bangle craftsmen from Rajasthan, Uttar Pradesh and Madhya Pradesh. These Lac Firozi Swirl Bangles are authentic and have been sourced directly from the local Jaipuri artisans. Lac is the natural resin secreted by a tiny insect collected from trees. The skilled craftsmen then transform this into lac coils to create attractive bangles out it. This is a beautiful set of handmade bangles with lac on metal. Quantity: Set of 8 bangles Care instructions: Care instructions",
    },
    {
      tags: ["accessories", "UX_TAG_BEST_SELLER", "UX_TAG_HURRY"],
      price: {
        amount: "1.0",
        currencyCode: "INR",
      },
      title: "Lac Bangles Ber Pair (M)",
      handle: "ber-lac-bangles-m-set-of-2",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41104941416746",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER_2_-910.jpg?v=1680695103",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER_2_-910.jpg?v=1680695103",
              width: 1600,
              height: 1600,
              altText: null,
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER_2_-910.jpg?v=1680695103",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER_2_-910.jpg?v=1680695103",
            },
            cursor: "eyJsYXN0X2lkIjo0MTEwNDk0MTQxNjc0NiwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41104941416746",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER_2_-910.jpg?v=1680695103",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER_2_-910.jpg?v=1680695103",
            width: 1600,
            height: 1600,
            altText: null,
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER_2_-910.jpg?v=1680695103",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER_2_-910.jpg?v=1680695103",
          },
        ],
      },
      quantity: 17,
      attributes: [
        {
          name: "Size",
          value: "2.8",
        },
        {
          name: "Material",
          value: "Pure lac",
        },
        {
          name: "Color",
          value: "Colours on the actual product may vary slightly.",
        },
      ],
      description:
        "The famous lac bangles of Jaipur are as old as the city itself. In the year 1727 CE, the then ruler Maharaja Sawai Jai Singh II, was very keen on making Jaipur a centre for craftsmen and artisans and so he invited lac bangle craftsmen from Rajasthan, Uttar Pradesh and Madhya Pradesh.Lac is the natural resin secreted by a tiny insect collected from trees. The skilled craftsmen then transform this into lac coils to create attractive bangles out it.This is a handmade lac bangle of Jaipur with radiant wave-like patterns. The bangles are authentic and have been sourced directly from the local Jaipuri artisans. Quantity: Set of 2 bangles Care instructions: Lac is delicate, handle with care.",
    },
    {
      tags: ["accessories", "UX_TAG_BEST_SELLER", "UX_TAG_HURRY"],
      price: {
        amount: "550.0",
        currencyCode: "INR",
      },
      title: "Zaina Lac Bangles (L) Set of 2",
      handle: "zaina-lac-bangles-m-set-of-2",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41104887709994",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Untitled-1.jpg?v=1680694782",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Untitled-1.jpg?v=1680694782",
              width: 1600,
              height: 1600,
              altText: null,
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Untitled-1.jpg?v=1680694782",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Untitled-1.jpg?v=1680694782",
            },
            cursor: "eyJsYXN0X2lkIjo0MTEwNDg4NzcwOTk5NCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41104887709994",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Untitled-1.jpg?v=1680694782",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Untitled-1.jpg?v=1680694782",
            width: 1600,
            height: 1600,
            altText: null,
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Untitled-1.jpg?v=1680694782",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Untitled-1.jpg?v=1680694782",
          },
        ],
      },
      quantity: 3,
      attributes: [
        {
          name: "Size",
          value: "2.8",
        },
        {
          name: "Material",
          value: "Pure lac",
        },
        {
          name: "Color",
          value: "Colours on the actual product may vary slightly.",
        },
      ],
      description:
        "The famous lac bangles of Jaipur are as old as the city itself. In the year 1727 CE, the then ruler Maharaja Sawai Jai Singh II, was very keen on making Jaipur a centre for craftsmen and artisans and so he invited lac bangle craftsmen from Rajasthan, Uttar Pradesh and Madhya Pradesh.Lac is the natural resin secreted by a tiny insect collected from trees. The skilled craftsmen then transform this into lac coils to create attractive bangles out it.This is a handmade lac bangle of Jaipur with radiant wave-like patterns. The bangles are authentic and have been sourced directly from the local Jaipuri artisans. Quantity: Set of 2 bangles Care instructions: Lac is delicate, handle with care.",
    },
    {
      tags: [
        "accessories",
        "bangles",
        "Festive Collection",
        "jaipur",
        "lac",
        "lac bangles",
        "Personal Use",
        "rajasthan",
        "UX_TAG_BEST_SELLER",
        "UX_TAG_HURRY",
        "women",
      ],
      price: {
        amount: "550.0",
        currencyCode: "INR",
      },
      title: "Lac Leheriya Bangles Setttttttttt of 8",
      handle: "leheriya-lac-bangles-s-set-of-8",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41104608952618",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER_30_-468_69152dcd-1e0a-4c7d-b4a5-0a8f9c815b62.jpg?v=1680693247",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER_30_-468_69152dcd-1e0a-4c7d-b4a5-0a8f9c815b62.jpg?v=1680693247",
              width: 1600,
              height: 1600,
              altText: null,
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER_30_-468_69152dcd-1e0a-4c7d-b4a5-0a8f9c815b62.jpg?v=1680693247",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER_30_-468_69152dcd-1e0a-4c7d-b4a5-0a8f9c815b62.jpg?v=1680693247",
            },
            cursor: "eyJsYXN0X2lkIjo0MTEwNDYwODk1MjYxOCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41104608952618",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER_30_-468_69152dcd-1e0a-4c7d-b4a5-0a8f9c815b62.jpg?v=1680693247",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER_30_-468_69152dcd-1e0a-4c7d-b4a5-0a8f9c815b62.jpg?v=1680693247",
            width: 1600,
            height: 1600,
            altText: null,
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER_30_-468_69152dcd-1e0a-4c7d-b4a5-0a8f9c815b62.jpg?v=1680693247",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/COVER_30_-468_69152dcd-1e0a-4c7d-b4a5-0a8f9c815b62.jpg?v=1680693247",
          },
        ],
      },
      quantity: 1,
      attributes: [
        {
          name: "Size",
          value: "2.6",
        },
        {
          name: "Material",
          value: "Pure lac",
        },
        {
          name: "Color",
          value: "Colours on the actual product may vary slightly.",
        },
      ],
      description:
        "These famous Lac Leheriya Bangles of Jaipur are as old as the city itself. In the year 1727 CE, the then ruler Maharaja Sawai Jai Singh II, was very keen on making Jaipur a centre for craftsmen and artisans and so he invited lac bangle craftsmen from Rajasthan, Uttar Pradesh and Madhya Pradesh. Lac is the natural resin secreted by a tiny insect collected from trees. The skilled craftsmen then transform this into lac coils to create attractive bangles out it. This is set of handmade Lac Leheriya Bangles of Jaipur with radiant wave-like patterns. These lac bangles are authentic and have been sourced directly from the local Jaipuri artisans. Quantity: Set of 8 bangles Care instructions: Lac is delicate, handle with care.",
    },
    {
      tags: [
        "accessories",
        "handcrafted",
        "handmade",
        "handmade by artisans",
        "jewellery",
        "UX_TAG_BEST_SELLER",
        "UX_TAG_HURRY",
        "UX_TAG_TRENDING",
      ],
      price: {
        amount: "2250.0",
        currencyCode: "INR",
      },
      title: "BEADED LONG NECKLACE AND EARRING SET-ENCHANTED GARDEN",
      handle: "beaded-long-necklace-and-earring-set-enchanted-garden",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41104375841066",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BEADEDLONGNECKLACEANDEARRINGSET-AZUREGARDEN-5.jpg?v=1680692078",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BEADEDLONGNECKLACEANDEARRINGSET-AZUREGARDEN-5.jpg?v=1680692078",
              width: 2860,
              height: 2860,
              altText: null,
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BEADEDLONGNECKLACEANDEARRINGSET-AZUREGARDEN-5.jpg?v=1680692078",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BEADEDLONGNECKLACEANDEARRINGSET-AZUREGARDEN-5.jpg?v=1680692078",
            },
            cursor: "eyJsYXN0X2lkIjo0MTEwNDM3NTg0MTA2NiwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41104375841066",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BEADEDLONGNECKLACEANDEARRINGSET-AZUREGARDEN-5.jpg?v=1680692078",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BEADEDLONGNECKLACEANDEARRINGSET-AZUREGARDEN-5.jpg?v=1680692078",
            width: 2860,
            height: 2860,
            altText: null,
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BEADEDLONGNECKLACEANDEARRINGSET-AZUREGARDEN-5.jpg?v=1680692078",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BEADEDLONGNECKLACEANDEARRINGSET-AZUREGARDEN-5.jpg?v=1680692078",
          },
        ],
      },
      quantity: 8,
      attributes: [
        {
          name: "Material",
          value: "Beads and thread.",
        },
        {
          name: "Size",
          value:
            "Necklace approx. length 18.5 inches including tassels. Length of earring 2.6inches approx. without hook closure.",
        },
        {
          name: "Color",
          value:
            "The colours seen in the image may vary from the actual product due to photographic lighting source different computer screen resolutions and displays.",
        },
      ],
      description:
        "Intricate, yet bold, this set plays well with any outfit for a look that's striking and unique. This beautifully handcrafted beadwork necklace is testimony to the versatility and finesse of Indian craftsmanship. This set comes with a long necklace and a complimenting earring with a metal fish hook closure. Lovingly handcrafted by women from rural India for whom these beaded creations are a means to earn a sustainable and dignified livelihood. Care instructions : This product has been hand crafted and may have slight irregularities that are a natural outcome of the human involvement in the process. Gently wipe with a soft,clean cloth. Beaded jewellery requires extra care to protect beads. Handle delicately.Storage : Keep your beaded jewellery away from chemicals such as sprays and perfumes. Store in a pouch or box to prevent scratching and entanglement. Quantity : Set of 1 Long Necklace and 1 matching pair of earrings. Ships within 7-15days",
    },
    {
      tags: [
        "accessories",
        "bangles",
        "handmade",
        "jaipur",
        "lac",
        "lac bangles",
        "UX_TAG_HURRY",
        "women",
      ],
      price: {
        amount: "550.0",
        currencyCode: "INR",
      },
      title: "Lac Bangles Bright Waves Set of 8",
      handle: "bright-waves-lac-bangles-s-set-of-8",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41547575034154",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/files/ashish.jpg?v=1685353879",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/files/ashish.jpg?v=1685353879",
              width: 800,
              height: 800,
              altText: null,
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/files/ashish.jpg?v=1685353879",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/files/ashish.jpg?v=1685353879",
            },
            cursor: "eyJsYXN0X2lkIjo0MTU0NzU3NTAzNDE1NCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41547575034154",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/files/ashish.jpg?v=1685353879",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/files/ashish.jpg?v=1685353879",
            width: 800,
            height: 800,
            altText: null,
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/files/ashish.jpg?v=1685353879",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/files/ashish.jpg?v=1685353879",
          },
        ],
      },
      quantity: 24,
      attributes: [
        {
          name: "Size",
          value: "2.6",
        },
        {
          name: "Material",
          value: "Pure lac",
        },
        {
          name: "Color",
          value: "Colours on the actual product may vary slightly.",
        },
      ],
      description:
        "Color : Maroon & Black and WhiteColor Material : 100% Handloom Natural Cotton Qty : Set of 8 bangles These famous Lac Bangles Bright Waves of Jaipur are as old as the city itself. In the year 1727 CE, the then ruler Maharaja Sawai Jai Singh II, was very keen on making Jaipur a centre for craftsmen and artisans and so he invited lac bangle craftsmen from Rajasthan, Uttar Pradesh and Madhya Pradesh. Lac is the natural resin secreted by a tiny insect collected from trees. The skilled craftsmen then transform this into lac coils to create attractive bangles out it. This is a set of handmade lac bangles of Jaipur with radiant wave-like patterns. These Lac Bangles Bright Waves are authentic and have been sourced directly from the local Jaipuri artisans. Care instructions: Lac is delicate, handle with care.",
    },
    {
      tags: ["accessories"],
      price: {
        amount: "2950.0",
        currencyCode: "INR",
      },
      title: "Dhokra Mandala Necklace",
      handle: "mandala-dhokra-necklace",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329445994794",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/MandalaDhokraNecklace-174-266-396-_1-695436.jpg?v=1683005532",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/MandalaDhokraNecklace-174-266-396-_1-695436.jpg?v=1683005532",
              width: 1600,
              height: 1600,
              altText: "Dhokra Mandala Necklace",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/MandalaDhokraNecklace-174-266-396-_1-695436.jpg?v=1683005532",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/MandalaDhokraNecklace-174-266-396-_1-695436.jpg?v=1683005532",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQ0NTk5NDc5NCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329445994794",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/MandalaDhokraNecklace-174-266-396-_1-695436.jpg?v=1683005532",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/MandalaDhokraNecklace-174-266-396-_1-695436.jpg?v=1683005532",
            width: 1600,
            height: 1600,
            altText: "Dhokra Mandala Necklace",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/MandalaDhokraNecklace-174-266-396-_1-695436.jpg?v=1683005532",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/MandalaDhokraNecklace-174-266-396-_1-695436.jpg?v=1683005532",
          },
        ],
      },
      quantity: 9,
      attributes: [
        {
          name: "Size",
          value: "Length- 17 inches",
        },
        {
          name: "Material",
          value: "Brass and cotton",
        },
      ],
      description:
        "Who doesn’t know about the 'Dancing Girl' bronze sculpture of Mohenjo-Daro, the great city of the Indus Valley Civilisation. The technique of making the Dhokra art is said to have originated from there, more than 4000 years ago. For thousands of years, tribes stretching across the central belt of India have been using the same wax metal casting method to produce stunning pieces of art.This Dhokra necklace is a stunning piece of art. It is made of brass and braided cotton thread.In our endeavor to celebrate such traditional art and artisans, Peepultree has made it possible for you to get this handcrafted Dhokra necklace online. Quantity: 1 piece Care Instructions: Brass tarnishes with time, giving it a beautiful antique look. However, if you prefer to maintain the sheen, clean regularly with a soft dry cloth.Keep away from moisture and abrasive cleaning agents. This is a handcrafted product that may have sharp edges. Handle gently and carefully. Ships within 7-15days. For Bulk Orders delivery time may vary.",
    },
    {
      tags: ["CAT_WOMENYOGATOPS", "PT_CAT_YOGAWOMENTOP"],
      price: {
        amount: "3900.0",
        currencyCode: "INR",
      },
      title: "Ajrakh Free Size Overlay Vanya",
      handle: "ajrakh-free-size-overlay-vanya",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41104889119018",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/PRA8546.jpg?v=1680694789",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/PRA8546.jpg?v=1680694789",
              width: 1620,
              height: 1620,
              altText: "Ajrakh Free Size Overlay Vanya",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/PRA8546.jpg?v=1680694789",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/PRA8546.jpg?v=1680694789",
            },
            cursor: "eyJsYXN0X2lkIjo0MTEwNDg4OTExOTAxOCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41104889119018",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/PRA8546.jpg?v=1680694789",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/PRA8546.jpg?v=1680694789",
            width: 1620,
            height: 1620,
            altText: "Ajrakh Free Size Overlay Vanya",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/PRA8546.jpg?v=1680694789",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/PRA8546.jpg?v=1680694789",
          },
        ],
      },
      quantity: 11,
      attributes: [
        {
          name: "Size",
          value: "Free Size",
        },
        {
          name: "Material",
          value: "Modal silk and 100% Cotton Satin",
        },
        {
          name: "Color",
          value: "Juniper Green",
        },
      ],
      description:
        "Made for year long comfort and elegance, this Juniper Green Ajrakh Overlay is free-size and versatile! Ajrakh is a colourful block printing tradition practised in Kutch and Sindh. It is believed to be one of the most ancient forms of printing - perhaps from the Indus Valley Civilization, which was known for its cotton and use of indigo, almost 4000 years ago. The double-sided block printed Ajrakh fabric is still made in the traditional way using natural dyes. On PeepulTree, you will find an assortment of Indian textiles from the far corners of India. These arts are iconic as they represent centuries-old traditions, and use natural material inspired by the land they come from. Shipping : 7-8 daysReturn Policy : No return",
    },
    {
      tags: [
        "CAT_WOMENYOGABOTTOMS",
        "handmade",
        "handmade in india",
        "handwoven dupatta",
        "PT_CAT_YOGAWOMENBOTTOMS",
        "stole",
        "The Trial Collection Child 1",
        "UX_TAG_TRENDING",
        "Weaving",
      ],
      price: {
        amount: "1900.0",
        currencyCode: "INR",
      },
      title: "Ajrakh Rust Neo Stole",
      handle: "rust-neo-ajrakh-stole",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329433608490",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210927-152300-_1-283625.jpg?v=1683005479",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210927-152300-_1-283625.jpg?v=1683005479",
              width: 2048,
              height: 2048,
              altText: "Shop Handmade Ajrakh Rust Neo Cotton Dupattas ",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210927-152300-_1-283625.jpg?v=1683005479",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210927-152300-_1-283625.jpg?v=1683005479",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQzMzYwODQ5MCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329433608490",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210927-152300-_1-283625.jpg?v=1683005479",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210927-152300-_1-283625.jpg?v=1683005479",
            width: 2048,
            height: 2048,
            altText: "Shop Handmade Ajrakh Rust Neo Cotton Dupattas ",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210927-152300-_1-283625.jpg?v=1683005479",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210927-152300-_1-283625.jpg?v=1683005479",
          },
        ],
      },
      quantity: 8,
      attributes: [
        {
          name: "Size",
          value: "220*50 cms",
        },
        {
          name: "Material",
          value: "Modal",
        },
        {
          name: "Colour",
          value:
            "The colours seen in the image may vary from the actual product due to photographic lighting source, different computer screen resolutions and displays.",
        },
      ],
      description:
        "A striking, contemporarised, printed, stole in the traditional Ajrakh printing technique that is said to be nearly 4,500 years old. Ajrakh is an ancient vegetable dyeing and resist block-printing technique done on cloth . The process of 'Ajrakh' is a long drawn process involving many stages of printing. Each layer of visible colour is printed after a gap of time so the cloth has time to to cure for the day,giving it it's unique name (aaj-rakh). Originating in Sindh, Pakistan, and presently crafted by artisans in Kutch, Ajrakh block printing uses motifs inspired by nature. Kutch Craft Collective is a collaborative platform of 5 organizations from Kutch and was formed to revive the old crafts of Kutch, while creating livelihood opportunities for the artisan families. Amongst the five organizations of KCC, VRDI (Vivekananda Rural Development Institute) was established in 1988 with the mission of skill enhancement of Kutchi artisans and develop craft enterprises. It undertakes training, production, market support, and capacity building of craft enterprises in Mandvi & Mundra. Peepul Tree is proud to join hands with KCC in presenting Kutch 's most authentic art and craft forms. Quantity:1 Piece Care Instructions: Professional Dry Clean Only. Ships within 7-15days. Disclaimer:This product is lovingly hand printed by our artisans and may have slight irregularities that are a natural outcome of the human involvement in the process. Naturally dyed fabrics and threads may bleed. The colours seen in the image may vary from the actual product due to photographic lighting source, different computer screen resolutions and displays.",
    },
    {
      tags: ["accessories", "Holiday Accessories"],
      price: {
        amount: "2600.0",
        currencyCode: "INR",
      },
      title: "Dhokra Sambukah Necklace",
      handle: "sambukah-dhokra-necklace",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329446322474",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/SambukahDhokraNecklace-168-848-_1-319846.jpg?v=1683005533",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/SambukahDhokraNecklace-168-848-_1-319846.jpg?v=1683005533",
              width: 1600,
              height: 1600,
              altText: "Dhokra Sambukah Necklace",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/SambukahDhokraNecklace-168-848-_1-319846.jpg?v=1683005533",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/SambukahDhokraNecklace-168-848-_1-319846.jpg?v=1683005533",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQ0NjMyMjQ3NCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329446322474",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/SambukahDhokraNecklace-168-848-_1-319846.jpg?v=1683005533",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/SambukahDhokraNecklace-168-848-_1-319846.jpg?v=1683005533",
            width: 1600,
            height: 1600,
            altText: "Dhokra Sambukah Necklace",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/SambukahDhokraNecklace-168-848-_1-319846.jpg?v=1683005533",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/SambukahDhokraNecklace-168-848-_1-319846.jpg?v=1683005533",
          },
        ],
      },
      quantity: 14,
      attributes: [
        {
          name: "Size",
          value: "Length- 25 inches",
        },
        {
          name: "Material",
          value: "Brass and cotton",
        },
      ],
      description:
        "Who doesn’t know about the 'Dancing Girl' bronze sculpture of Mohenjo-Daro, the great city of the Indus Valley Civilisation. The technique of making the Dhokra art is said to have originated from there, more than 4000 years ago. For thousands of years, tribes stretching across the central belt of India have been using the same wax metal casting method to produce stunning pieces of art.On display is a dhokra necklace with a brass pendant. The design is simple yet elegant. In our endeavor to celebrate such traditional art and artisans, Peepultree has made it possible for you to get this handcrafted Dhokra necklace online. Quantity: 1 piece Care Instructions: Brass tarnishes with time, giving it a beautiful antique look. However, if you prefer to maintain the sheen, clean regularly with a soft dry cloth.Keep away from moisture and abrasive cleaning agents. This is a handcrafted product that may have sharp edges. Handle gently and carefully. Ships within 7-15 Days. Delivery timelines may vary for bulk orders.",
    },
    {
      tags: [
        "accessories",
        "handcrafted",
        "handmade",
        "handmade by artisans",
        "handmade in india",
        "wearables",
      ],
      price: {
        amount: "750.0",
        currencyCode: "INR",
      },
      title: "BEADED SPECTACLE CHAIN GREY",
      handle: "beaded-spectacle-chain-grey",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41104897868074",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BEADEDSPECTACLECHAINGREY-2.jpg?v=1680694832",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BEADEDSPECTACLECHAINGREY-2.jpg?v=1680694832",
              width: 2992,
              height: 2992,
              altText: "BEADED SPECTACLE CHAIN GREY-2",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BEADEDSPECTACLECHAINGREY-2.jpg?v=1680694832",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BEADEDSPECTACLECHAINGREY-2.jpg?v=1680694832",
            },
            cursor: "eyJsYXN0X2lkIjo0MTEwNDg5Nzg2ODA3NCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41104897868074",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BEADEDSPECTACLECHAINGREY-2.jpg?v=1680694832",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BEADEDSPECTACLECHAINGREY-2.jpg?v=1680694832",
            width: 2992,
            height: 2992,
            altText: "BEADED SPECTACLE CHAIN GREY-2",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BEADEDSPECTACLECHAINGREY-2.jpg?v=1680694832",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BEADEDSPECTACLECHAINGREY-2.jpg?v=1680694832",
          },
        ],
      },
      quantity: 9,
      attributes: [
        {
          name: "Size",
          value:
            "Approx. 74 cms length without loop. 0.5 cms width approximately.",
        },
        {
          name: "Material",
          value: "Beads and Thread",
        },
      ],
      description:
        "This delicately crafted beaded spectacle chain, adds oodles of charm and is high on utility. This beautifully handcrafted beadwork spectacle chain is testimony to the versatility and finesse of Indian craftsmanship. This chain has a loop fastening at the end which loops into your spectacle frame end, allowing you to freely hang your spactacle around your neck when not in use. Lovingly handcrafted by women from rural India for whom these beaded creations are a means to earn a sustainable and dignified livelihood. Care instructions : This product has been hand crafted and may have slight irregularities that are a natural outcome of the human involvement in the process. Gently wipe with a soft,clean cloth. Beaded jewellery requires extra care to protect beads. Handle delicately.Storage : Keep your beaded jewellery away from chemicals such as sprays and perfumes. Store in a pouch or box to prevent scratching and entanglement. Quantity : 1 Chain. Ships within 7-15days",
    },
    {
      tags: [
        "corporate gifting",
        "curios",
        "Decorate Home",
        "dhokra",
        "dhokra ganesha",
        "diwali gift",
        "Festive Collection",
        "festive gifting",
        "ganesha",
        "ganesha art",
        "gift box",
        "handmade gift",
        "home decor",
        "housewarming gift",
      ],
      price: {
        amount: "1600.0",
        currencyCode: "INR",
      },
      title: "Dhokra Ganesha Figurine",
      handle: "dhokra-ganesha-figurine",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329444913450",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/4-590-249161.jpg?v=1683005527",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/4-590-249161.jpg?v=1683005527",
              width: 1600,
              height: 1600,
              altText: "Shop For Handmade Dhokra Ganesha Figurine Online",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/4-590-249161.jpg?v=1683005527",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/4-590-249161.jpg?v=1683005527",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQ0NDkxMzQ1MCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329444913450",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/4-590-249161.jpg?v=1683005527",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/4-590-249161.jpg?v=1683005527",
            width: 1600,
            height: 1600,
            altText: "Shop For Handmade Dhokra Ganesha Figurine Online",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/4-590-249161.jpg?v=1683005527",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/4-590-249161.jpg?v=1683005527",
          },
        ],
      },
      quantity: 18,
      attributes: [
        {
          name: "Size",
          value: "7x2.5 inches",
        },
        {
          name: "Material",
          value: "Brass",
        },
      ],
      description:
        "Who doesn’t know about the 'Dancing Girl' bronze sculpture of Mohenjo-Daro, the great city of the Indus Valley Civilisation. The technique of making Dhokra art is said to have originated from there, more than 4000 years ago. For thousands of years, tribes stretching across the central belt of India have been using the same wax metal casting method to produce stunning pieces of art. This is a handmade figurine of Lord Ganesha made by the artists belonging to the Dhokra tribe. In our endeavor to celebrate such traditional art and artisans, Peepultree has made it possible for you to get this handcrafted Ganesha online. Quantity: 1 piece Care Instructions: Brass tarnishes with time, giving it a beautiful antique look. However, if you prefer to maintain the sheen, clean regularly with a soft dry cloth.Keep away from moisture and abrasive cleaning agents. This is a handcrafted product that may have sharp edges. Handle gently and carefully. Ships within 7-15days",
    },
    {
      tags: [
        "Chanderi",
        "chanderi saree",
        "Handloom",
        "handloom saree",
        "handloom silk",
        "handmade by artisans",
        "handmade in india",
        "handwoven",
        "Natural Silk",
        "pure silk",
        "Resham silk",
        "resham silk saree",
        "saree",
        "Silk",
        "silk handloom saree",
        "silk saree",
        "Traditional weaves of India",
      ],
      price: {
        amount: "17250.0",
        currencyCode: "INR",
      },
      title: "Chanderi Resham Silk Fuchsia and Orange Saree",
      handle: "chanderi-resham-silk-fuschia-and-orange-saree",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329443307818",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/ChanderiReshamSilkFucshiaandOrangeSaree1-648632.jpg?v=1683005516",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/ChanderiReshamSilkFucshiaandOrangeSaree1-648632.jpg?v=1683005516",
              width: 800,
              height: 800,
              altText:
                "Buy Chanderi Resham Silk Fuchsia and Orange Silk Sarees For Women",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/ChanderiReshamSilkFucshiaandOrangeSaree1-648632.jpg?v=1683005516",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/ChanderiReshamSilkFucshiaandOrangeSaree1-648632.jpg?v=1683005516",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQ0MzMwNzgxOCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329443307818",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/ChanderiReshamSilkFucshiaandOrangeSaree1-648632.jpg?v=1683005516",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/ChanderiReshamSilkFucshiaandOrangeSaree1-648632.jpg?v=1683005516",
            width: 800,
            height: 800,
            altText:
              "Buy Chanderi Resham Silk Fuchsia and Orange Silk Sarees For Women",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/ChanderiReshamSilkFucshiaandOrangeSaree1-648632.jpg?v=1683005516",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/ChanderiReshamSilkFucshiaandOrangeSaree1-648632.jpg?v=1683005516",
          },
        ],
      },
      quantity: 6,
      attributes: [
        {
          name: "Color",
          value: "Fuchsia with Orange motifs and Gold zari",
        },
        {
          name: "Material",
          value: "Pure Resham Silk",
        },
      ],
      description:
        "Drape yourself in this delicate hand woven fuchsia saree with orange and gold motifs to befit any occasion. Chanderi is a small town in Madhya Pradesh, that hosts one of the most famous handloom clusters and is home to the much sought after hand woven sarees in silk, silk cotton and cotton. It is renowned for the intricately textured cotton and silk fabrics acclaimed for their sheer texture, light weight and luxurious drape. The history of Chanderi weaves dates back to the eleventh century. At that time, the town was a major route for trading because of it's proximity to the old ports of the Deccan and Central India (particularly Malwa).There are references to Chanderi silk sarees dating back to 1200 B.C in the Rig Veda and the Mahabharata. This makes this weave a treasure and an absolute must have for avid saree lovers. This saree is brought to Peepul Tree by Mrinalini. Mrinalini is a platform to help handloom weavers across the country with the aim to preserve and protect India's treasured craft heritage. Mrinalini passionately honours the ageless knowledge of India's finest weavers while preserving traditional handloom techniques. All Mrinalini sarees are made from high quality, natural yarns. Quantity-1 saree with blouse piece. Ships within 7-15days. In order to maintain fairness to our artisans, as well as to keep our prices fair, this product is not returnable and non refundable. Care instructions-Professional Dry Clean Only. This product is handwoven by artisans on traditional looms and may have slight irregularities that are a natural outcome of the human involvement in the process. Naturally dyed fabrics and threads may bleed. Store garment separately, away from sunlight without exposure to any moisture. Air the textile every few months so that you may enjoy this drape for many years to come. The colours seen in the image may vary from the actual product due to photographic lighting source, different computer screen resolutions and displays.",
    },
    {
      tags: [
        "Blue Pottery",
        "handcrafted",
        "Handloom",
        "handmade",
        "handmade by artisans",
        "handmade in india",
        "handmade kitchenware",
        "Handmade pottery",
        "handpainted",
        "Handpainted pottery",
        "home decor",
        "Indian crafts",
        "Indian Pottery",
        "Jaipur",
        "Jaipur Blue Pottery",
        "made in india",
        "natural dyes",
        "painted with natural dyes",
        "Rajasthan Blue Pottery",
        "RajasthanPottery",
        "traditional art of rajasthan",
      ],
      price: {
        amount: "450.0",
        currencyCode: "INR",
      },
      title: "Blue Pottery Bottle Stopper Foliage",
      handle: "blue-pottery-bottle-stopper-foliage",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41104904487210",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperFoliage.jpg?v=1680694872",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperFoliage.jpg?v=1680694872",
              width: 2575,
              height: 2575,
              altText: "Blue Pottery Bottle Stopper Foliage",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperFoliage.jpg?v=1680694872",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperFoliage.jpg?v=1680694872",
            },
            cursor: "eyJsYXN0X2lkIjo0MTEwNDkwNDQ4NzIxMCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41104904487210",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperFoliage.jpg?v=1680694872",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperFoliage.jpg?v=1680694872",
            width: 2575,
            height: 2575,
            altText: "Blue Pottery Bottle Stopper Foliage",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperFoliage.jpg?v=1680694872",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperFoliage.jpg?v=1680694872",
          },
        ],
      },
      quantity: 17,
      attributes: [
        {
          name: "Size",
          value:
            "Length may vary due to cork. Approx dimensions 4.5cms width and 6.5cms in length.",
        },
      ],
      description:
        "This Blue Pottery Bottle Stopper Foliage doesn’t let that sangria and wine lose its flavour. This beautiful bottle stopper is an ideal pick me up to let your favourite drink retain its taste, while adding oodles of style and charm. The art of Blue Pottery is a traditional craft of Jaipur, Rajasthan that travelled from Persia with the Mughals.. The name 'blue pottery' comes from the eye-catching blue dye used to colour the pottery. Quantity: 1 piece Care Instructions: Wash with a mild detergent and allow cork to dry completely before next use. This Blue Pottery Bottle Stopper Foliage is a handcrafted product that may have sharp surfaces and crevices. It is fragile. Handle gently and carefully. Ships within 7-15days",
    },
    {
      tags: [
        "adivasi",
        "curio",
        "Decorate Home",
        "dhokra",
        "dhokra art",
        "Festive Collection",
        "figurine",
        "handmade",
        "harappa",
        "harappan civilization",
        "history",
        "home decor",
        "indus valley civilization",
        "sculpture",
        "UX_TAG_TRENDING",
      ],
      price: {
        amount: "850.0",
        currencyCode: "INR",
      },
      title: "Dhokra Brass Adivasi Curio",
      handle: "adivaasi-dhokra-curio",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41104420143402",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/AdivaasiDhokraCurio2-903.jpg?v=1680692285",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/AdivaasiDhokraCurio2-903.jpg?v=1680692285",
              width: 1600,
              height: 1600,
              altText: "Shop Dhokra Brass Adivasi Curio Online",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/AdivaasiDhokraCurio2-903.jpg?v=1680692285",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/AdivaasiDhokraCurio2-903.jpg?v=1680692285",
            },
            cursor: "eyJsYXN0X2lkIjo0MTEwNDQyMDE0MzQwMiwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41104420143402",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/AdivaasiDhokraCurio2-903.jpg?v=1680692285",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/AdivaasiDhokraCurio2-903.jpg?v=1680692285",
            width: 1600,
            height: 1600,
            altText: "Shop Dhokra Brass Adivasi Curio Online",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/AdivaasiDhokraCurio2-903.jpg?v=1680692285",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/AdivaasiDhokraCurio2-903.jpg?v=1680692285",
          },
        ],
      },
      quantity: 20,
      attributes: [
        {
          name: "Size",
          value: "7x2.5 inches",
        },
        {
          name: "Material",
          value: "Brass",
        },
      ],
      description:
        "This Dhokra Brass Adivasi Curio is one stunning piece of art handcrafted by the Dhokra tribe themselves. Who doesn’t know about the 'Dancing Girl' bronze sculpture of Mohenjo-Daro, the great city of the Indus Valley Civilization? The technique of making Dhokra art is said to have originated from there, more than 4000 years ago. For thousands of years, tribes stretching across the central belt of India have been using the same wax metal casting method to produce stunning pieces of art. Quantity: 1 piece Care Instructions: Brass tarnishes with time, giving it a beautiful antique look. However, if you prefer to maintain the sheen, clean regularly with a soft dry cloth.Keep away from moisture and abrasive cleaning agents. This is a handcrafted Dhokra Brass Adivasi Curio that may have sharp edges. Handle gently and carefully.",
    },
    {
      tags: [
        "Gujarat",
        "Hand painted cloth",
        "Mother Goddesses",
        "Temple Cloths from Gujarat",
        "traditional art",
      ],
      price: {
        amount: "28350.0",
        currencyCode: "INR",
      },
      title: "Darshana: Mata Ni Pachedi",
      handle: "darshana-mata-ni-pachedi",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329445667114",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210609-1140131-_1-934629.jpg?v=1683005531",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210609-1140131-_1-934629.jpg?v=1683005531",
              width: 2048,
              height: 2048,
              altText: "Darshana: Mata Ni Pachedi",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210609-1140131-_1-934629.jpg?v=1683005531",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210609-1140131-_1-934629.jpg?v=1683005531",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQ0NTY2NzExNCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329445667114",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210609-1140131-_1-934629.jpg?v=1683005531",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210609-1140131-_1-934629.jpg?v=1683005531",
            width: 2048,
            height: 2048,
            altText: "Darshana: Mata Ni Pachedi",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210609-1140131-_1-934629.jpg?v=1683005531",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210609-1140131-_1-934629.jpg?v=1683005531",
          },
        ],
      },
      quantity: 28,
      attributes: [
        {
          name: "Size",
          value: "56cms height x 87cms width",
        },
        {
          name: "Material",
          value: "Natural colours on cotton",
        },
        {
          name: "Color",
          value: "Colours on the actual product may vary slightly",
        },
      ],
      description:
        "Mata Ni Pachedi is also called the Kalamkari of Gujarat thanks to its resemblance to the art of Kalamkari from South India and the same method of painting, namely using a pen (kalam) made out of bamboo. Mata Ni Pachedi, in the local dialect literally translates to ‘behind the mother goddess’. This artform is believed to have evolved 300 years ago, when the devotees from the Devipujak or the Vaghri community in Gujarat and Rajasthan were barred from entering temples. They created their own place of worship by elaborately painting stories of local patron goddesses on large rectangular cloths. Different forms of goddesses are depicted in the most traditional colours, made of natural dyes.Bahuchar Mata or Becharaji, is depicted in this painting, seated on a rooster. She is the goddess of fertility and locals seek her blessings for fulfillment of their wishes. Several devotees, animals and mythological characters are painted in the background.Quantity : 1 Painting without frame.Care instructions : Keep away from direct sunlight, moisture, water and other liquids. To preserve this artwork, keep in frame with glass. Shipping:This painting is made to order and cannot be shipped immediately. Minimum time to create this masterpiece would be 35-45days.",
    },
    {
      tags: ["accessories"],
      price: {
        amount: "1050.0",
        currencyCode: "INR",
      },
      title: "LAMBANI DORA CHOKER SUNSHINE",
      handle: "lambani-dora-choker-sunshine",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329485971754",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_144736-681420.jpg?v=1683005826",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_144736-681420.jpg?v=1683005826",
              width: 2048,
              height: 2048,
              altText: null,
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_144736-681420.jpg?v=1683005826",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_144736-681420.jpg?v=1683005826",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQ4NTk3MTc1NCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329485971754",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_144736-681420.jpg?v=1683005826",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_144736-681420.jpg?v=1683005826",
            width: 2048,
            height: 2048,
            altText: null,
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_144736-681420.jpg?v=1683005826",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_144736-681420.jpg?v=1683005826",
          },
        ],
      },
      quantity: 26,
      attributes: [
        {
          name: "Size",
          value: "Shortest- 5 inches & Longest- 16 inches",
        },
        {
          name: "Material",
          value: "Cotton thread + beads + mirrors",
        },
        {
          name: "Colour",
          value:
            "The colours seen in the image may vary from the actual product due to photographic lighting source, different computer screen resolutions and displays.",
        },
      ],
      description:
        "While traveling through the Sandur village in Karnataka one gets introduced to the community of Lambani women wearing full embroidered traditional clothes, selling beautifully crafted pieces of art. The vibrant tribal art form traced back from the deserts of Rajasthan has today even received international recognition owing to its universal appeal. This red and blue Lambani necklace is sure to add elegance to your look. The necklace is authentic, handmade and sourced from the local Lambani artisans. While the Lambanis believe in celebrating life, we have made available this Lambani choker online to celebrate them and their art. Quantity: 1 piece Care instructions: Store your jewellery in it's own box or pouch to prevent scratching, chipping and entanglement. Keep away from humidity, moisture, fragrance and water. Use delicately.",
    },
    {
      tags: ["accessories"],
      price: {
        amount: "1050.0",
        currencyCode: "INR",
      },
      title: "LAMBANI DORA CHOKER SOFT GREEN",
      handle: "lambani-dora-choker-soft-green",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329485611306",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_144655-268335.jpg?v=1683005825",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_144655-268335.jpg?v=1683005825",
              width: 2048,
              height: 2048,
              altText: null,
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_144655-268335.jpg?v=1683005825",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_144655-268335.jpg?v=1683005825",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQ4NTYxMTMwNiwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329485611306",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_144655-268335.jpg?v=1683005825",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_144655-268335.jpg?v=1683005825",
            width: 2048,
            height: 2048,
            altText: null,
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_144655-268335.jpg?v=1683005825",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_144655-268335.jpg?v=1683005825",
          },
        ],
      },
      quantity: 25,
      attributes: [
        {
          name: "Size",
          value: "Shortest- 5 inches & Longest- 16 inches",
        },
        {
          name: "Material",
          value: "Cotton thread + beads + mirrors",
        },
        {
          name: "Colour",
          value:
            "The colours seen in the image may vary from the actual product due to photographic lighting source, different computer screen resolutions and displays.",
        },
      ],
      description:
        "While traveling through the Sandur village in Karnataka one gets introduced to the community of Lambani women wearing full embroidered traditional clothes, selling beautifully crafted pieces of art. The vibrant tribal art form traced back from the deserts of Rajasthan has today even received international recognition owing to its universal appeal. This red and blue Lambani necklace is sure to add elegance to your look. The necklace is authentic, handmade and sourced from the local Lambani artisans. While the Lambanis believe in celebrating life, we have made available this Lambani choker online to celebrate them and their art. Quantity: 1 piece Care instructions: Store your jewellery in it's own box or pouch to prevent scratching, chipping and entanglement. Keep away from humidity, moisture, fragrance and water. Use delicately.",
    },
    {
      tags: ["#Sleftages", "#nowhere"],
      price: {
        amount: "3060.0",
        currencyCode: "INR",
      },
      title: "Angora and Merino Shawl Hazy Bronze",
      handle: "angora-and-merino-shawl-hazy-bronze",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329435672874",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4138-503644.jpg?v=1683005486",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4138-503644.jpg?v=1683005486",
              width: 2048,
              height: 2048,
              altText: "Angora and Merino Shawl Hazy Bronze-1",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4138-503644.jpg?v=1683005486",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4138-503644.jpg?v=1683005486",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQzNTY3Mjg3NCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329435672874",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4138-503644.jpg?v=1683005486",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4138-503644.jpg?v=1683005486",
            width: 2048,
            height: 2048,
            altText: "Angora and Merino Shawl Hazy Bronze-1",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4138-503644.jpg?v=1683005486",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4138-503644.jpg?v=1683005486",
          },
        ],
      },
      quantity: 29,
      attributes: [
        {
          name: "Size",
          value: "206x109",
        },
        {
          name: "Material",
          value: "Angora and merino",
        },
        {
          name: "Colour",
          value: "Green And Black Color",
        },
      ],
      description:
        "Bring the Himalayas closer to home with this green and black coloured stole, made with a blend of wool obtained from Angora rabbits and Merino Sheep. Wool weaving is an ancient tradition in Himachal Pradesh, carried forward today by the weavers who inhabit its hills and valleys. Depending on the weave, pattern and the kind of yarn being used, a single weaver can weave from one metre to five metres in a day, creating unique and distinct designs in the process. Kullu Karishma helps keep this age-old tradition alive by working with weavers from the hilly villages of Himachal Pradesh. Now you can find this fine collection of products that are woven by the talented weavers of Himachal Pradesh, on PeepulTree. Care Instructions : Hand Wash in cool Water Dry Wash/Dry CleanReturn Policy : No return",
    },
    {
      tags: ["#Sleftages", "#nowhere"],
      price: {
        amount: "4225.0",
        currencyCode: "INR",
      },
      title: "Angora and Tussar Silk Stole Herringbone",
      handle: "angora-and-tussar-silk-stole-herringbone",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329434198314",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4294-264653.jpg?v=1683005482",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4294-264653.jpg?v=1683005482",
              width: 2048,
              height: 2048,
              altText: "Angora and Tussar Silk Stole Herringbone-1",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4294-264653.jpg?v=1683005482",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4294-264653.jpg?v=1683005482",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQzNDE5ODMxNCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329434198314",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4294-264653.jpg?v=1683005482",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4294-264653.jpg?v=1683005482",
            width: 2048,
            height: 2048,
            altText: "Angora and Tussar Silk Stole Herringbone-1",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4294-264653.jpg?v=1683005482",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4294-264653.jpg?v=1683005482",
          },
        ],
      },
      quantity: 22,
      attributes: [
        {
          name: "Size",
          value: "175x60",
        },
        {
          name: "Material",
          value: "Angora & Tussar Silk",
        },
        {
          name: "Colour",
          value: "Beige Color",
        },
      ],
      description:
        "This winter, stay warm with this hand-woven beige coloured stole, made with a blend of Tussar silk and wool obtained from Angora rabbits. Wool weaving is an ancient tradition in Himachal Pradesh, carried forward today by the weavers who inhabit its hills and valleys. Depending on the weave, pattern and the kind of yarn being used, a single weaver can weave from one metre to five metres in a day, creating unique and distinct designs in the process. Kullu Karishma helps keep this age-old tradition alive by working with weavers from the hilly villages of Himachal Pradesh. Now you can find this fine collection of products that are woven by the talented weavers of Himachal Pradesh, on PeepulTree. Care Instructions : Hand Wash in cool Water Dry Wash/Dry CleanReturn Policy : No return",
    },
    {
      tags: ["handmade in india", "handwoven dupatta", "UX_TAG_BEST_SELLER"],
      price: {
        amount: "1550.0",
        currencyCode: "INR",
      },
      title: "Ajrakh Neo Arunah Stole",
      handle: "aru-a-neo-ajrakh-stole",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329433444650",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210927-153109-_1-190976.jpg?v=1683005479",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210927-153109-_1-190976.jpg?v=1683005479",
              width: 2048,
              height: 2048,
              altText: "Buy Ajrakh Neo Arunah Cotton Stoles Online",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210927-153109-_1-190976.jpg?v=1683005479",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210927-153109-_1-190976.jpg?v=1683005479",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQzMzQ0NDY1MCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329433444650",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210927-153109-_1-190976.jpg?v=1683005479",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210927-153109-_1-190976.jpg?v=1683005479",
            width: 2048,
            height: 2048,
            altText: "Buy Ajrakh Neo Arunah Cotton Stoles Online",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210927-153109-_1-190976.jpg?v=1683005479",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210927-153109-_1-190976.jpg?v=1683005479",
          },
        ],
      },
      quantity: 8,
      attributes: [
        {
          name: "Size",
          value: "220*50 cms",
        },
        {
          name: "Material",
          value: "Modal",
        },
        {
          name: "Colour",
          value:
            "The colours seen in the image may vary from the actual product due to photographic lighting source, different computer screen resolutions and displays.",
        },
      ],
      description:
        "A striking, contemporarised, printed, stole in the traditional Ajrakh printing technique that is said to be nearly 4,500 years old. Ajrakh is an ancient vegetable dyeing and resist block-printing technique done on cloth . The process of 'Ajrakh' is a long drawn process involving many stages of printing. Each layer of visible colour is printed after a gap of time so the cloth has time to to cure for the day,giving it it's unique name (aaj-rakh). Originating in Sindh, Pakistan, and presently crafted by artisans in Kutch, Ajrakh block printing uses motifs inspired by nature. Kutch Craft Collective is a collaborative platform of 5 organizations from Kutch and was formed to revive the old crafts of Kutch, while creating livelihood opportunities for the artisan families. Amongst the five organizations of KCC, VRDI (Vivekananda Rural Development Institute) was established in 1988 with the mission of skill enhancement of Kutchi artisans and develop craft enterprises. It undertakes training, production, market support, and capacity building of craft enterprises in Mandvi & Mundra. Peepul Tree is proud to join hands with KCC in presenting Kutch 's most authentic art and craft forms. Quantity:1 Piece Care Instructions: Professional Dry Clean Only. Ships within 7-15days. Disclaimer:This product is lovingly hand printed by our artisans and may have slight irregularities that are a natural outcome of the human involvement in the process. Naturally dyed fabrics and threads may bleed. The colours seen in the image may vary from the actual product due to photographic lighting source, different computer screen resolutions and displays.",
    },
    {
      tags: ["#Sleftages", "#nowhere"],
      price: {
        amount: "2900.0",
        currencyCode: "INR",
      },
      title: "Cotton Slate Yoga Mat bag : Dabu Print",
      handle: "cotton-slate-yoga-mat-bag-bagru-print",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329444094250",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/9Y1A1597-491062.png?v=1683005520",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/9Y1A1597-491062.png?v=1683005520",
              width: 1600,
              height: 1600,
              altText: null,
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/9Y1A1597-491062.png?v=1683005520",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/9Y1A1597-491062.png?v=1683005520",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQ0NDA5NDI1MCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329444094250",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/9Y1A1597-491062.png?v=1683005520",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/9Y1A1597-491062.png?v=1683005520",
            width: 1600,
            height: 1600,
            altText: null,
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/9Y1A1597-491062.png?v=1683005520",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/9Y1A1597-491062.png?v=1683005520",
          },
        ],
      },
      quantity: 22,
      attributes: [
        {
          name: "Color",
          value: "Organic block print on grey base",
        },
        {
          name: "Material",
          value: "100% Slub Cotton",
        },
        {
          name: "Size",
          value: "Length : 28 inches   Base diameter : 7.5 inches",
        },
      ],
      description:
        "Looking for a sustainable everyday accessory? This quilted yoga bag is made with natural yarn and hand-printed by artisans near Jaipur. Its light, washable fabric and broad strap with a quilted texture make it comfortable to carry, while the large size accommodates various yoga mats. The bag also features two pockets - one for your phone, keys, and cash, and another for your water bottle. The fabrics used in this bag are sourced directly from artisans in India, making it an eco-friendly choice for conscious consumers. Care Instructions : Handwash separately in cold water using mild detergent. Line dry in shade. Do not bleach. Return Information: All requests for returns must be initiated by the customer within 48 hours of receiving the product. Any request received outside the 48 hour window will not be considered for a return and refund.To initiate a return, please send us an email at support@peepultree.in.Please ensure the merchandise is unused, unworn, undamaged, and in its original condition with all the tags and labels intact. Please refer to our standard return policy for more details.",
    },
    {
      tags: [
        "bhujodi stole",
        "handmade",
        "handmade by artisans",
        "handmade in india",
        "handwoven",
        "handwoven in kutch",
        "handwoven stole",
      ],
      price: {
        amount: "2750.0",
        currencyCode: "INR",
      },
      title: "Bhujodi Ekam Stole",
      handle: "ekam-bhujodi-stole",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329438753066",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/CDPeepulTreeDec20449-177-_1-676255.jpg?v=1683005501",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/CDPeepulTreeDec20449-177-_1-676255.jpg?v=1683005501",
              width: 1054,
              height: 1054,
              altText: "Buy Bhujodi Ekam Cotton Stoles Online",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/CDPeepulTreeDec20449-177-_1-676255.jpg?v=1683005501",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/CDPeepulTreeDec20449-177-_1-676255.jpg?v=1683005501",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQzODc1MzA2NiwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329438753066",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/CDPeepulTreeDec20449-177-_1-676255.jpg?v=1683005501",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/CDPeepulTreeDec20449-177-_1-676255.jpg?v=1683005501",
            width: 1054,
            height: 1054,
            altText: "Buy Bhujodi Ekam Cotton Stoles Online",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/CDPeepulTreeDec20449-177-_1-676255.jpg?v=1683005501",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/CDPeepulTreeDec20449-177-_1-676255.jpg?v=1683005501",
          },
        ],
      },
      quantity: 30,
      attributes: [
        {
          name: "Size",
          value: "24x80 inches",
        },
        {
          name: "Color",
          value: "Natural White and Black",
        },
        {
          name: "Material",
          value: "100% Cotton",
        },
      ],
      description:
        "This monochrome Bhujodi Stole is handwoven in a traditional way using natural dyes. The motifs are simplistic and reflect the rich culture of the Vankar community. What makes this stole unique is that it can be used in all seasons - providing warmth in winters and also offering an airy coolness in summers. Visit any household in the village of Bhujodi, which comes in the Kutch district of Gujarat and you are sure to find the local community involved in some or the other kind of handicraft work. One such community is of weavers, known as Vankars who have been involved in weaving for ages. Their unique Bhujodi weave goes back more than 500 years ago when this community of weavers settled in Bhuj. Quantity: 1 piece Care Instructions: Hand wash separately in cold water, using mild detergent. This product has been woven by hand and may have slight irregularities that are a natural outcome of the human involvement in the process. The colors seen in the image may vary from the actual product due to different computer screen resolutions and displays. Ships within 7-15days",
    },
    {
      tags: [
        "Crafts of India",
        "Decorative Lights",
        "Festive Collection",
        "Festive Lights",
        "Handmade",
        "Holiday Decor",
        "Home Decor",
        "Indian Craftsmanship",
        "Lord Shiva",
        "Shola",
        "Shola Lights",
        "West Bengal",
      ],
      price: {
        amount: "2000.0",
        currencyCode: "INR",
      },
      title: "Shola Lights",
      handle: "shola-lights",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41104805593386",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/SholaLights-1.jpg?v=1680694336",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/SholaLights-1.jpg?v=1680694336",
              width: 1600,
              height: 1600,
              altText: "Buy Decorative Shola Lights Flowers Online",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/SholaLights-1.jpg?v=1680694336",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/SholaLights-1.jpg?v=1680694336",
            },
            cursor: "eyJsYXN0X2lkIjo0MTEwNDgwNTU5MzM4NiwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41104805593386",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/SholaLights-1.jpg?v=1680694336",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/SholaLights-1.jpg?v=1680694336",
            width: 1600,
            height: 1600,
            altText: "Buy Decorative Shola Lights Flowers Online",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/SholaLights-1.jpg?v=1680694336",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/SholaLights-1.jpg?v=1680694336",
          },
        ],
      },
      quantity: 5,
      attributes: [
        {
          name: "Title",
          value: "Default Title",
        },
      ],
      description:
        "These Shola Lights are a handmade shola string of fairy lights with delicate, life-like flowers. They are a reflection of fine craftsmanship. According to folklore, Lord Shiva was on his way to marry Parvati when he requested Lord Vishwakarma, to make him a white crown for his wedding. However, the great builder Vishwakarma wasn’t able to make the crown that Shiva desired. It was then that Shiva created a man, who in turn created an exquisite crown, garland and other ornaments from the soft white core of the shola plant. The man was named “Malakar”. The Shola craftsmen who mostly belong to Bengal are still called “Malakar” which means “Makers of Garlands”. Shola is an aquatic plant which has milky white sponge-like stems. The Malakars use tools such as blades and threads and spend months meticulously transforming these stems into beautiful decorative shola pieces.",
    },
    {
      tags: ["accessories"],
      price: {
        amount: "900.0",
        currencyCode: "INR",
      },
      title: "LAMBANI DARPANA NECKLACE LIME POP",
      handle: "lambani-darpana-necklace-lime-pop",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329485447466",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_142434-711904.jpg?v=1683005824",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_142434-711904.jpg?v=1683005824",
              width: 2048,
              height: 2048,
              altText: null,
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_142434-711904.jpg?v=1683005824",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_142434-711904.jpg?v=1683005824",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQ4NTQ0NzQ2NiwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329485447466",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_142434-711904.jpg?v=1683005824",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_142434-711904.jpg?v=1683005824",
            width: 2048,
            height: 2048,
            altText: null,
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_142434-711904.jpg?v=1683005824",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_142434-711904.jpg?v=1683005824",
          },
        ],
      },
      quantity: 24,
      attributes: [
        {
          name: "Size",
          value: "Short - 5 inch & Long - 16 inch",
        },
        {
          name: "Material",
          value: "Cotton thread + beads + mirrors",
        },
        {
          name: "Colour",
          value:
            "The colours seen in the image may vary from the actual product due to photographic lighting source, different computer screen resolutions and displays.",
        },
      ],
      description:
        "While traveling through the Sandur village in Karnataka one gets introduced to the community of Lambani women wearing full embroidered traditional clothes, selling beautifully crafted pieces of art. The vibrant tribal art form traced back from the deserts of Rajasthan has today even received international recognition owing to its universal appeal. This red and blue Lambani necklace is sure to add elegance to your look. The necklace is authentic, handmade and sourced from the local Lambani artisans. While the Lambanis believe in celebrating life, we have made available this Lambani choker online to celebrate them and their art. Quantity: 1 piece Care instructions: Store your jewellery in it's own box or pouch to prevent scratching, chipping and entanglement. Keep away from humidity, moisture, fragrance and water. Use delicately.",
    },
    {
      tags: ["Holiday Accessories"],
      price: {
        amount: "1200.0",
        currencyCode: "INR",
      },
      title: "LAMBANI AYNA LAYERED NECKLACE FLAME",
      handle: "lambani-ayna-layered-necklace-flame",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329486397738",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_143237-225993.jpg?v=1683005827",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_143237-225993.jpg?v=1683005827",
              width: 2048,
              height: 2048,
              altText: null,
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_143237-225993.jpg?v=1683005827",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_143237-225993.jpg?v=1683005827",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQ4NjM5NzczOCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329486397738",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_143237-225993.jpg?v=1683005827",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_143237-225993.jpg?v=1683005827",
            width: 2048,
            height: 2048,
            altText: null,
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_143237-225993.jpg?v=1683005827",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_143237-225993.jpg?v=1683005827",
          },
        ],
      },
      quantity: 23,
      attributes: [
        {
          name: "Size",
          value: "Shortest- 11 inches and Longest- 21 inchest",
        },
        {
          name: "Material",
          value: "Cotton thread + beads + mirrors",
        },
        {
          name: "Colour",
          value:
            "The colours seen in the image may vary from the actual product due to photographic lighting source, different computer screen resolutions and displays.",
        },
      ],
      description:
        "While traveling through the Sandur village in Karnataka one gets introduced to the community of Lambani women wearing full embroidered traditional clothes, selling beautifully crafted pieces of art. The vibrant tribal art form traced back from the deserts of Rajasthan has today even received international recognition owing to its universal appeal. This is a necklace covered in Lambani art with beautiful and intricate mirror and thread work reflecting the age-old Lambani tradition. While the Lambanis believe in celebrating life, we have made available this Lambani necklace online to celebrate them and their art. Quantity: 1 piece Care instructions: Store your jewellery in it's own box or pouch to prevent scratching, chipping and entanglement. Keep away from humidity, moisture, fragrance and water. Use delicately.",
    },
    {
      tags: [
        "corporate gifting",
        "dhokra",
        "dhokra art",
        "dhokra ganesha",
        "Festive Collection",
        "festive gifts",
        "ganesha collector",
        "ganesha curio",
        "Gift For Others",
        "handmade by artisans",
        "handmade in india",
        "home decor",
        "indian gifts",
      ],
      price: {
        amount: "1850.0",
        currencyCode: "INR",
      },
      title: "Dhokra Ganesha Gift Box",
      handle: "dhokra-ganesha-gift-box",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329446224170",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211008-133521-_1-326041.jpg?v=1683005533",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211008-133521-_1-326041.jpg?v=1683005533",
              width: 2048,
              height: 2048,
              altText: "Buy Dhokra Ganesha Gift Box Online",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211008-133521-_1-326041.jpg?v=1683005533",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211008-133521-_1-326041.jpg?v=1683005533",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQ0NjIyNDE3MCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329446224170",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211008-133521-_1-326041.jpg?v=1683005533",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211008-133521-_1-326041.jpg?v=1683005533",
            width: 2048,
            height: 2048,
            altText: "Buy Dhokra Ganesha Gift Box Online",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211008-133521-_1-326041.jpg?v=1683005533",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211008-133521-_1-326041.jpg?v=1683005533",
          },
        ],
      },
      quantity: 20,
      attributes: [
        {
          name: "Size",
          value: "7x2.5 inches",
        },
        {
          name: "Material",
          value: "Brass",
        },
      ],
      description:
        "Discover the art of gifting with our array of gifting options for the year-round festivities, with curated gifts that are crafted by hand and enchanted by history. In this Dhokra Ganesha Gift Box, we bring to you an exquisite ancient craft form meticulously crafted by hand. This is a handmade figurine of Lord Ganesha made by the artists belonging to the Dhokra tribe. In our endeavor to celebrate such traditional art and artisans, Peepultree has made it possible for you to get this handcrafted Ganesha online. Who doesn’t know about the 'Dancing Girl' bronze sculpture of Mohenjo-Daro, the great city of the Indus Valley Civilisation. The technique of making Dhokra art is said to have originated from there, more than 4000 years ago. For thousands of years, tribes stretching across the central belt of India have been using the same wax metal casting method to produce stunning pieces of art. Quantity:1 Piece. Care Instructions:Keep away from moisture, perfumes and abrasive cleaning agents. This is a handcrafted product that may have sharp edges. Also do handle it gently. Handle glasses with care.Brass tarnishes with time, giving it a beautiful antique look. However, if you prefer to maintain the sheen, gently rub with a soft dry cloth regularly. Ships within 7-15days. For Bulk Orders delivery time may vary.",
    },
    {
      tags: [
        "Dhokra",
        "Dhokra Art",
        "Harappa",
        "Harappan Dancing Girl",
        "History collectable",
        "History gifts",
        "History shop",
        "peepultree exclusive",
        "unique gifts",
      ],
      price: {
        amount: "2500.0",
        currencyCode: "INR",
      },
      title: "Dhokra Harappan Dancing Girl",
      handle: "dhokra-harappan-dancing-girl",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329445568810",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DhokraHarappanDancingGirl-1-477080.jpg?v=1683005531",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DhokraHarappanDancingGirl-1-477080.jpg?v=1683005531",
              width: 1600,
              height: 1600,
              altText: "Dhokra Harappan Dancing Girl Online",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DhokraHarappanDancingGirl-1-477080.jpg?v=1683005531",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DhokraHarappanDancingGirl-1-477080.jpg?v=1683005531",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQ0NTU2ODgxMCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329445568810",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DhokraHarappanDancingGirl-1-477080.jpg?v=1683005531",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DhokraHarappanDancingGirl-1-477080.jpg?v=1683005531",
            width: 1600,
            height: 1600,
            altText: "Dhokra Harappan Dancing Girl Online",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DhokraHarappanDancingGirl-1-477080.jpg?v=1683005531",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DhokraHarappanDancingGirl-1-477080.jpg?v=1683005531",
          },
        ],
      },
      quantity: 9,
      attributes: [
        {
          name: "Size",
          value: "7x2.25 inches",
        },
        {
          name: "Material",
          value: "Brass",
        },
      ],
      description:
        "This Dhokra Harappan Dancing Girl reflects the continuation of old traditions of art and craft of Harappan Civilization. Inspired by the very famous Dancing Girl of the 4000 year old Harappan civilization, this replica of the famous sculpture of Harappan civilization found in the site of Mohenjo-daro has been made using the same technique that was used back then. Dhokra artists across the tribal belt of Jharkhand, West Bengal, Odisha, Chhattisgarh and Telangana use the same lost wax technique that was used by the Bronze Age Harappans, to make their bronze figurines and statues. Our Dhokra artist, Somnath Karmakar has been inspired by the ancient past to recreate one of India's most famous pieces of Harappan civilization. Quantity: 1 piece Care instructions: Keep away from moisture, perspiration, perfumes and abrasive cleaning agents. This is a handcrafted product that may have sharp edges. Also do handle it gently. Brass tarnishes with time, giving it a beautiful antique look. However, if you prefer to maintain the sheen, clean regularly with a soft dry cloth . Ships within 7-15days. For Bulk Orders delivery time may vary.",
    },
    {
      tags: [
        "bastar",
        "bastar craft",
        "black metal",
        "candle holder",
        "CAT_WOMENYOGABOTTOMS",
        "Chhattisgarh",
        "Festive Collection",
        "Festive Lights",
        "handcrafted",
        "handcrafted in india",
        "handmade",
        "handmade by artisans",
        "handmade in india",
        "Indian crafts",
        "iron craft",
        "PT_CAT_YOGAWOMENBOTTOMS",
        "UX_TAG_HURRY",
      ],
      price: {
        amount: "2500.0",
        currencyCode: "INR",
      },
      title: "Bastar Wrought Iron Spiral Tealight Holder",
      handle: "bastar-wrought-iron-spiral-t-light-holder",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329440227626",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BASTARBLACKIRONSPIRALCANDLESTAND5-327905.jpg?v=1683005504",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BASTARBLACKIRONSPIRALCANDLESTAND5-327905.jpg?v=1683005504",
              width: 800,
              height: 800,
              altText: "Decorative Bastar Wrought Iron Spiral Tealight Holder",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BASTARBLACKIRONSPIRALCANDLESTAND5-327905.jpg?v=1683005504",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BASTARBLACKIRONSPIRALCANDLESTAND5-327905.jpg?v=1683005504",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQ0MDIyNzYyNiwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329440227626",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BASTARBLACKIRONSPIRALCANDLESTAND5-327905.jpg?v=1683005504",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BASTARBLACKIRONSPIRALCANDLESTAND5-327905.jpg?v=1683005504",
            width: 800,
            height: 800,
            altText: "Decorative Bastar Wrought Iron Spiral Tealight Holder",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BASTARBLACKIRONSPIRALCANDLESTAND5-327905.jpg?v=1683005504",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BASTARBLACKIRONSPIRALCANDLESTAND5-327905.jpg?v=1683005504",
          },
        ],
      },
      quantity: 24,
      attributes: [
        {
          name: "Material",
          value: "Iron",
        },
        {
          name: "Size(Inch)",
          value: 'Length - 17" x Height - 17" x Width - 5"',
        },
      ],
      description:
        "This handcrafted Bastar Wrought Iron Spiral Tealight Holder is a stunner and comes from the heart of India's tribal belt of Bastar reflecting the rural lifestyle of the tribal community. This Bastar Wrought Iron Spiral T-Light Holder is artistic, modern and seeped in history and tradition! Lohshilp (Wrought Iron Craft) is one of the most unique and the oldest craft forms of Bastar. The Bastar region is one of the richest areas in terms of iron ore deposits in India. The art originated from the Iron Smith Community that used to make farming and hunting implements for tribes. Over the years, the craft has evolved into a revered artistic form. Quantity: 1 piece Care Instructions: Iron rusts with time. However, if you prefer to maintain the sheen, clean regularly with a soft dry cloth .Keep away from moisture and abrasive cleaning agents. This is a handcrafted product that may have sharp edges and slight design variations. Some products may need minor adjustments to balance. Ships within 7- 21 days.",
    },
    {
      tags: [
        "bastar",
        "bastar craft",
        "black metal",
        "handcrafted",
        "handcrafted in india",
        "handmade",
        "handmade by artisans",
        "handmade in india",
        "home decor",
        "Indian art",
        "Indian crafts",
        "iron craft",
        "wrought iron",
      ],
      price: {
        amount: "2600.0",
        currencyCode: "INR",
      },
      title: "Bastar Wrought Iron Linemen",
      handle: "bastar-wrought-iron-unnamed-2",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329437540650",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC-8620-_1-552705.jpg?v=1683005496",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC-8620-_1-552705.jpg?v=1683005496",
              width: 2048,
              height: 2048,
              altText: "Tribal Bastar Art Wrought Iron Linemen-1",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC-8620-_1-552705.jpg?v=1683005496",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC-8620-_1-552705.jpg?v=1683005496",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQzNzU0MDY1MCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329437540650",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC-8620-_1-552705.jpg?v=1683005496",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC-8620-_1-552705.jpg?v=1683005496",
            width: 2048,
            height: 2048,
            altText: "Tribal Bastar Art Wrought Iron Linemen-1",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC-8620-_1-552705.jpg?v=1683005496",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC-8620-_1-552705.jpg?v=1683005496",
          },
        ],
      },
      quantity: 20,
      attributes: [
        {
          name: "Material",
          value: "Iron",
        },
        {
          name: "Size",
          value: "37 Inch x 13 Inch",
        },
      ],
      description:
        "Lohshilp against a lighter coloured wall makes for an ideal statement for your home. A beautiful wall feature that can light up any corner of your home! This handcrafted beauty comes from the heart of India's tribal belt of Bastar reflecting the rural lifestyle of the tribal community. Lohshilp (Wrought Iron Craft) is one of the most unique and the oldest craft forms of Bastar. The Bastar region is one of the richest areas in terms of iron ore deposits in India. The art originated from the Iron Smith Community that used to make farming and hunting implements for tribes. Over the years, the craft has evolved into a revered artistic form. Quantity: 1 piece. Candles not included. Care Instructions: Iron rusts with time. However, if you prefer to maintain the sheen, clean regularly with a soft dry cloth .Keep away from moisture and abrasive cleaning agents. This is a handcrafted product that may have sharp edges and slight design variations. Some products may need minor adjustments to balance. Ships within 7-21days.",
    },
    {
      tags: [
        "CAT_WOMENYOGATOPS",
        "PT_CAT_YOGAWOMENTOP",
        "UX_TAG_BEST_SELLER",
        "UX_TAG_HURRY",
        "UX_TAG_TRENDING",
      ],
      price: {
        amount: "3900.0",
        currencyCode: "INR",
      },
      title: "Ajrakh Free Size Overlay Syamaaaaaaaa",
      handle: "ajrakh-free-size-overlay-syama",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329433280810",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/PRA8470-768594.jpg?v=1683005478",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/PRA8470-768594.jpg?v=1683005478",
              width: 2048,
              height: 2048,
              altText: "Ajrakh Free Size Overlay Syama",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/PRA8470-768594.jpg?v=1683005478",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/PRA8470-768594.jpg?v=1683005478",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQzMzI4MDgxMCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329433280810",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/PRA8470-768594.jpg?v=1683005478",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/PRA8470-768594.jpg?v=1683005478",
            width: 2048,
            height: 2048,
            altText: "Ajrakh Free Size Overlay Syama",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/PRA8470-768594.jpg?v=1683005478",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/PRA8470-768594.jpg?v=1683005478",
          },
        ],
      },
      quantity: 29,
      attributes: [
        {
          name: "Size",
          value: "Free Size",
        },
        {
          name: "Material",
          value: "Modal silk and 100% Cotton Satin",
        },
        {
          name: "Color",
          value: "wine",
        },
      ],
      description:
        "Crafted using a lustrous cotton satin and modal silk, this wine coloured Ajrakh Overlay gives you the freedom to create your own unique style. Ajrakh is a colourful block printing tradition practised in Kutch and Sindh. It is believed to be one of the most ancient forms of printing - perhaps from the Indus Valley Civilization, which was known for its cotton and use of indigo, almost 4000 years ago. The double-sided block printed Ajrakh fabric is still made in the traditional way using natural dyes. On PeepulTree, you will find an assortment of Indian textiles from the far corners of India. These arts are iconic as they represent centuries-old traditions, and use natural material inspired by the land they come from. Shipping : 7-8 days Return Policy : No return",
    },
    {
      tags: [
        "Blue Pottery",
        "hand paintings",
        "handcrafted",
        "handmade",
        "handmade by artisans",
        "handmade in india",
        "handmade kitchenware",
        "Handmade pottery",
        "handpainted",
        "Handpainted pottery",
        "home decor",
        "Indian crafts",
        "Indian Pottery",
        "Jaipur",
        "Jaipur Blue Pottery",
        "made in india",
        "natural dyes",
        "traditional art of rajasthan",
      ],
      price: {
        amount: "450.0",
        currencyCode: "INR",
      },
      title: "Blue Pottery Bottle Stopper Indigo Garden",
      handle: "blue-pottery-bottle-stopper-indigo-garden",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41104969269546",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperIndigoGarden.jpg?v=1680695326",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperIndigoGarden.jpg?v=1680695326",
              width: 2992,
              height: 2992,
              altText:
                "Shop Handmade Blue Pottery Bottle Stopper Indigo Garden",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperIndigoGarden.jpg?v=1680695326",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperIndigoGarden.jpg?v=1680695326",
            },
            cursor: "eyJsYXN0X2lkIjo0MTEwNDk2OTI2OTU0NiwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41104969269546",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperIndigoGarden.jpg?v=1680695326",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperIndigoGarden.jpg?v=1680695326",
            width: 2992,
            height: 2992,
            altText: "Shop Handmade Blue Pottery Bottle Stopper Indigo Garden",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperIndigoGarden.jpg?v=1680695326",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperIndigoGarden.jpg?v=1680695326",
          },
        ],
      },
      quantity: 7,
      attributes: [
        {
          name: "Size",
          value:
            "Length may vary due to cork. Approx dimensions 4.3cms width and approx.7cms in length.",
        },
      ],
      description:
        "This Blue Pottery Bottle Stopper Indigo Garden doesn't let the sangria and wine lose their flavour. This beautiful blue pottery bottle stopper is an ideal pick me up to let your favourite drink retain its taste, while adding oodles of style and charm. The art of Blue Pottery is a traditional craft of Jaipur, Rajasthan that travelled from Persia with the Mughals.. The name 'blue pottery' comes from the eye-catching blue dye used to colour the pottery. Quantity: 1 piece Care Instructions: Wash with a mild detergent and allow cork to dry completely before next use. This is a handcrafted product that may have sharp surfaces and crevices. It is fragile. Handle gently and carefully. Ships within 7-15days",
    },
    {
      tags: ["Festive Collection", "Festive Lights", "home decor"],
      price: {
        amount: "850.0",
        currencyCode: "INR",
      },
      title: "Dhokra Parna Tealight Holder",
      handle: "parna-dhokra-tealight-holder",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41104919724330",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Untitled-1114-141.jpg?v=1680694957",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Untitled-1114-141.jpg?v=1680694957",
              width: 1600,
              height: 1600,
              altText: null,
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Untitled-1114-141.jpg?v=1680694957",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Untitled-1114-141.jpg?v=1680694957",
            },
            cursor: "eyJsYXN0X2lkIjo0MTEwNDkxOTcyNDMzMCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41104919724330",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Untitled-1114-141.jpg?v=1680694957",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Untitled-1114-141.jpg?v=1680694957",
            width: 1600,
            height: 1600,
            altText: null,
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Untitled-1114-141.jpg?v=1680694957",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Untitled-1114-141.jpg?v=1680694957",
          },
        ],
      },
      quantity: 24,
      attributes: [
        {
          name: "Size",
          value: "16.8 x 6.5 cms",
        },
        {
          name: "Material",
          value: "Brass",
        },
      ],
      description:
        "This brass Tealight holder has been handcrafted by the artisans from the Dhokra tribe. Add a whole bunch of these to create a stunningly unique feature wall! Who doesn’t know about the 'Dancing Girl' bronze sculpture of Mohenjo-Daro, the great city of the Indus Valley Civilization. The technique of making the Dhokra art is said to have originated from there, more than 4000 years ago. For thousands of years, tribes stretching across the central belt of India have been using the same wax metal casting method to produce stunning pieces of art. Quantity: 1 piece Care Instructions: Brass tarnishes with time, giving it a beautiful antique look. However, if you prefer to maintain the sheen, clean regularly with a soft dry cloth. Keep away from moisture and abrasive cleaning agents. This is a handcrafted product that may have sharp edges. Handle gently and carefully. Ships within 7-15 Days. Delivery timelines may vary for bulk orders.",
    },
    {
      tags: ["#Sleftages", "#nowhere"],
      price: {
        amount: "4500.0",
        currencyCode: "INR",
      },
      title: "Cotton Stitch detail Harem Pants: Bagru print",
      handle: "cotton-stitch-detail-harem-pants-bagru-print",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329443930410",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Copyof9Y1A1305-712316.png?v=1683005519",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Copyof9Y1A1305-712316.png?v=1683005519",
              width: 1600,
              height: 1600,
              altText: null,
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Copyof9Y1A1305-712316.png?v=1683005519",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Copyof9Y1A1305-712316.png?v=1683005519",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQ0MzkzMDQxMCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329443930410",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Copyof9Y1A1305-712316.png?v=1683005519",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Copyof9Y1A1305-712316.png?v=1683005519",
            width: 1600,
            height: 1600,
            altText: null,
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Copyof9Y1A1305-712316.png?v=1683005519",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Copyof9Y1A1305-712316.png?v=1683005519",
          },
        ],
      },
      quantity: 21,
      attributes: [
        {
          name: "Color",
          value: "Organic Black Print on Natural Base",
        },
        {
          name: "Material",
          value: "100% Slub Cotton",
        },
        {
          name: "Size",
          value: "S/M",
        },
      ],
      description:
        'Experience the perfect blend of style, sustainability, and comfort with these yoga pants made from 100% slubbed cotton printed with natural dyes that allow your skin to breathe.Designed in collaboration with yoga teachers in India, these pants feature drawstrings at the waist and an elasticised hem, ensuring a comfortable fit.The traditional hand block print on this fabric has been created using the Bagru method, an eco-friendly technique that uses hand-carved wooden blocks dipped in natural dyes created primarily with locally-sourced ingredients.What\'s more, the slub cotton used in these pants is intentionally left with slight "lumps" or "imperfections," created through knotting or twisting the fabric as it is woven or spun, resulting in a unique and beautiful texture.This collection uses fabrics sourced directly from artisan communities in India, making it as kind to the planet as it is to your body. Care Instructions : Hand wash separately in cold water using mild detergent. Line dry in shade. Do not bleach. Return Information: All requests for returns must be initiated by the customer within 48 hours of receiving the product. Any request received outside the 48 hour window will not be considered for a return and refund.To initiate a return, please send us an email at support@peepultree.in.Please ensure the merchandise is unused, unworn, undamaged, and in its original condition with all the tags and labels intact. Please refer to our standard return policy for more details.',
    },
    {
      tags: ["UX_TAG_BEST_SELLER"],
      price: {
        amount: "10000.0",
        currencyCode: "INR",
      },
      title: "Cloud Grey Pure Handwoven Ombre Pashmina Stole",
      handle: "cloud-grey-pure-handwoven-ombre-pashmina-stole",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329443471658",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/CloudGreyPureHandwovenOmbrePashminaStole1-314743.jpg?v=1683005517",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/CloudGreyPureHandwovenOmbrePashminaStole1-314743.jpg?v=1683005517",
              width: 650,
              height: 650,
              altText:
                "Cloud Grey Pure Handwoven Ombre Pashmina Stole For Winters",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/CloudGreyPureHandwovenOmbrePashminaStole1-314743.jpg?v=1683005517",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/CloudGreyPureHandwovenOmbrePashminaStole1-314743.jpg?v=1683005517",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQ0MzQ3MTY1OCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329443471658",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/CloudGreyPureHandwovenOmbrePashminaStole1-314743.jpg?v=1683005517",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/CloudGreyPureHandwovenOmbrePashminaStole1-314743.jpg?v=1683005517",
            width: 650,
            height: 650,
            altText:
              "Cloud Grey Pure Handwoven Ombre Pashmina Stole For Winters",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/CloudGreyPureHandwovenOmbrePashminaStole1-314743.jpg?v=1683005517",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/CloudGreyPureHandwovenOmbrePashminaStole1-314743.jpg?v=1683005517",
          },
        ],
      },
      quantity: 4,
      attributes: [
        {
          name: "Size",
          value: "200cm x 70cm",
        },
        {
          name: "Material",
          value: "100% Pure Cashmere Pashmina",
        },
        {
          name: "Color",
          value: "Grey",
        },
      ],
      description:
        "This elegant double shaded, Ombre, light pastel stole in varying shades of clouds - grey and silver, is made of pure pashmina – the finest grade of cashmere wool. The yarn is handwoven in Kashmir on traditional looms. Soft, stylish, warm and light, this stole is understated in its sophistication. Pair it with traditional outfits or western wear, this beauty adds elan to your ensemble be it a work day or a social evening. This is one accessory that is a must for your wardrobe. Size: 200cm x 70cm Weight: 95-110gms Fabric: 100% Pure Cashmere Pashmina",
    },
    {
      tags: [
        "Blue Pottery",
        "hand paintings",
        "handcrafted",
        "handmade",
        "handmade by artisans",
        "handmade in india",
        "handmade kitchenware",
        "Handmade pottery",
        "handpainted",
        "Handpainted pottery",
        "home decor",
        "Indian art",
        "Indian crafts",
        "Indian Pottery",
        "Jaipur",
        "Jaipur Blue Pottery",
        "painted with natural dyes",
        "Rajasthan Blue Pottery",
        "RajasthanPottery",
        "Tableware",
      ],
      price: {
        amount: "450.0",
        currencyCode: "INR",
      },
      title: "Blue Pottery Bottle Stopper Crimson Leaf",
      handle: "blue-pottery-bottle-stopper-crimson-leaf",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41104903209258",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperCrimsonLeaf.jpg?v=1680694866",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperCrimsonLeaf.jpg?v=1680694866",
              width: 2992,
              height: 2992,
              altText: "Blue Pottery Bottle Stopper Crimson Leaf",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperCrimsonLeaf.jpg?v=1680694866",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperCrimsonLeaf.jpg?v=1680694866",
            },
            cursor: "eyJsYXN0X2lkIjo0MTEwNDkwMzIwOTI1OCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41104903209258",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperCrimsonLeaf.jpg?v=1680694866",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperCrimsonLeaf.jpg?v=1680694866",
            width: 2992,
            height: 2992,
            altText: "Blue Pottery Bottle Stopper Crimson Leaf",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperCrimsonLeaf.jpg?v=1680694866",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BluePotteryBottleStopperCrimsonLeaf.jpg?v=1680694866",
          },
        ],
      },
      quantity: 9,
      attributes: [
        {
          name: "Size",
          value:
            "Length may vary due to cork. Approx dimensions 4.3cms width and 7cms in length.",
        },
      ],
      description:
        "Don’t let that sangria and wine lose its flavour. This beautiful bottle stopper is an ideal pick me up to let your favourite drink retain its taste, while adding oodles of style and charm. The art of Blue Pottery is a traditional craft of Jaipur, Rajasthan that travelled from Persia with the Mughals.. The name 'blue pottery' comes from the eye-catching blue dye used to colour the pottery. Quantity: 1 piece Care Instructions: Wash with a mild detergent and allow cork to dry completely before next use. This is a handcrafted product that may have sharp surfaces and crevices. It is fragile. Handle gently and carefully. Ships within 7-21days.",
    },
    {
      tags: ["#Sleftages", "#nowhere"],
      price: {
        amount: "3500.0",
        currencyCode: "INR",
      },
      title: "Bhujodi Wool & Silk Natural Black stole",
      handle: "bhujodi-wool-silk-natural-black-stole",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41104899670314",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_1909.jpg?v=1680694837",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_1909.jpg?v=1680694837",
              width: 1600,
              height: 1600,
              altText: null,
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_1909.jpg?v=1680694837",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_1909.jpg?v=1680694837",
            },
            cursor: "eyJsYXN0X2lkIjo0MTEwNDg5OTY3MDMxNCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41104899670314",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_1909.jpg?v=1680694837",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_1909.jpg?v=1680694837",
            width: 1600,
            height: 1600,
            altText: null,
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_1909.jpg?v=1680694837",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_1909.jpg?v=1680694837",
          },
        ],
      },
      quantity: 10,
      attributes: [
        {
          name: "Size",
          value: 'L - 80" x Width - 24 Inch',
        },
        {
          name: "Material",
          value: "Wool & Silk",
        },
        {
          name: "Color",
          value: "Black",
        },
      ],
      description:
        'This Bhujodi stole is a melange of Wool and silk giving it a unique and rich texture. The natural hues of silk yarn interwoven with black create a classic piece that exudes stateliness Each stole is meticulously hand woven over several weeks by the weavers or "bunkars" of the Vankar community. Visit any household in the village of Bhujodi, which comes in the Kutch district of Gujarat and you are sure to find the local community involved in some or the other kind of handicraft work. One such community is of weavers, known as Vankars who have been involved in weaving for ages. Their unique Bhujodi weave goes back more than 500 years ago when this community of weavers settled in Bhuj. Get yourself a Unique Bhujodi Stole now from PeepulTree. Care instruction-Hand wash separately in cold water, using mild detergent. This product has been woven by hand and may have slight irregularities that are a natural outcome of the human involvement in the process. The colors seen in the image may vary from the actual product due to different computer screen resolutions and displays. No return policy',
    },
    {
      tags: [
        "handmade",
        "handmade by artisans",
        "handmade in india",
        "handwoven",
        "handwoven in kutch",
        "handwoven stole",
        "threadwork",
      ],
      price: {
        amount: "1850.0",
        currencyCode: "INR",
      },
      title: "Bhujodi Red & Navy Java Stole",
      handle: "red-navy-java-bhujodi-stole",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329439670570",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/4-991-_1-319432.jpg?v=1683005503",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/4-991-_1-319432.jpg?v=1683005503",
              width: 1600,
              height: 1600,
              altText: "Bhujodi Red & Navy Java Cotton Stoles ",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/4-991-_1-319432.jpg?v=1683005503",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/4-991-_1-319432.jpg?v=1683005503",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQzOTY3MDU3MCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329439670570",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/4-991-_1-319432.jpg?v=1683005503",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/4-991-_1-319432.jpg?v=1683005503",
            width: 1600,
            height: 1600,
            altText: "Bhujodi Red & Navy Java Cotton Stoles ",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/4-991-_1-319432.jpg?v=1683005503",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/4-991-_1-319432.jpg?v=1683005503",
          },
        ],
      },
      quantity: 8,
      attributes: [
        {
          name: "Size",
          value: "24x80 inches",
        },
        {
          name: "Material",
          value: "100% Cotton",
        },
        {
          name: "Color",
          value: "Red Navy  two tone colour with natural white weave detailing",
        },
      ],
      description:
        "You visit any household in the village of Bhujodi, which comes in the Kutch district of Gujarat and you are sure to find the local community involved in some or the other kind of handicraft work. One such community is of weavers, known as Vankars who have been involved in weaving for ages. Their unique Bhujodi weave goes back more than 500 years ago when this community of weavers settled in Bhuj.This Bhujodi Stole is handwoven in a traditional way using natural dyes. The motifs are simplistic and reflect the rich culture of the Vankar community. What makes this stole unique is that it can be used in all seasons - providing warmth in winters and also offering an airy coolness in summers. Quantity: 1 piece Care Instructions: Hand wash separately in cold water, using mild detergent. This product has been woven by hand and may have slight irregularities that are a natural outcome of the human involvement in the process. The colors seen in the image may vary from the actual product due to different computer screen resolutions and displays. Ships within 7-15days",
    },
    {
      tags: ["#Sleftages", "#nowhere"],
      price: {
        amount: "2285.0",
        currencyCode: "INR",
      },
      title: "Anroga Merino and Eri Silk Stole Blush",
      handle: "anroga-merino-and-eri-silk-stole-blush",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329434525994",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4210_74634d45-e837-4d64-932a-56d817276b09-112206.jpg?v=1683005484",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4210_74634d45-e837-4d64-932a-56d817276b09-112206.jpg?v=1683005484",
              width: 2048,
              height: 2048,
              altText: "Anroga Merino and Eri Silk Stole Blush-1",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4210_74634d45-e837-4d64-932a-56d817276b09-112206.jpg?v=1683005484",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4210_74634d45-e837-4d64-932a-56d817276b09-112206.jpg?v=1683005484",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQzNDUyNTk5NCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329434525994",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4210_74634d45-e837-4d64-932a-56d817276b09-112206.jpg?v=1683005484",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4210_74634d45-e837-4d64-932a-56d817276b09-112206.jpg?v=1683005484",
            width: 2048,
            height: 2048,
            altText: "Anroga Merino and Eri Silk Stole Blush-1",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4210_74634d45-e837-4d64-932a-56d817276b09-112206.jpg?v=1683005484",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/IMG_4210_74634d45-e837-4d64-932a-56d817276b09-112206.jpg?v=1683005484",
          },
        ],
      },
      quantity: 21,
      attributes: [
        {
          name: "Size",
          value: "194x63",
        },
        {
          name: "Material",
          value: "Silk & Angora Merino Wool",
        },
        {
          name: "Colour",
          value: "vegetable Dyed pink color",
        },
      ],
      description:
        "Crafted with a blend of wool obtained from Angora rabbit, Merino sheep and Eri silk, this hand-woven rose coloured stole is dyed in vegetable pigment and is perfect for your winter wardrobe. Wool weaving is an ancient tradition in Himachal Pradesh, carried forward today by the weavers who inhabit its hills and valleys. Depending on the weave, pattern and the kind of yarn being used, a single weaver can weave from one metre to five metres in a day, creating unique and distinct designs in the process. Kullu Karishma helps keep this age-old tradition alive by working with weavers from the hilly villages of Himachal Pradesh. Now you can find this fine collection of products that are woven by the talented weavers of Himachal Pradesh, on PeepulTree. Care Instructions : Hand Wash in cool Water Dry Wash/Dry CleanReturn Policy : No return",
    },
    {
      tags: [
        "Bio-degradable products",
        "cotton",
        "handcrafted",
        "handcrafted in india",
        "Handloom",
        "handmade",
        "handmade by artisans",
        "handmade in india",
        "handwoven",
        "Holiday Accessories",
        "ikat",
        "ikat dupatta",
        "ikat weave",
        "Indian crafts",
        "made in india",
        "master weaver",
        "natural fibres",
        "South Cotton",
        "telia",
        "telia rumal",
        "telia rumal dupatta",
        "wearables",
        "Weaving",
      ],
      price: {
        amount: "3000.0",
        currencyCode: "INR",
      },
      title: "Telia Rumal Cotton Dupatta - Blue and Red",
      handle: "telia-rumal-cotton-dupatta-blue-red",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329542037802",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/TELIARUMALCOTTONDUPATTABLUE_RED2-155175.jpg?v=1683006472",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/TELIARUMALCOTTONDUPATTABLUE_RED2-155175.jpg?v=1683006472",
              width: 800,
              height: 800,
              altText: "Red and Blue Telia Rumal Cotton Dupatta-1",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/TELIARUMALCOTTONDUPATTABLUE_RED2-155175.jpg?v=1683006472",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/TELIARUMALCOTTONDUPATTABLUE_RED2-155175.jpg?v=1683006472",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTU0MjAzNzgwMiwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329542037802",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/TELIARUMALCOTTONDUPATTABLUE_RED2-155175.jpg?v=1683006472",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/TELIARUMALCOTTONDUPATTABLUE_RED2-155175.jpg?v=1683006472",
            width: 800,
            height: 800,
            altText: "Red and Blue Telia Rumal Cotton Dupatta-1",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/TELIARUMALCOTTONDUPATTABLUE_RED2-155175.jpg?v=1683006472",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/TELIARUMALCOTTONDUPATTABLUE_RED2-155175.jpg?v=1683006472",
          },
        ],
      },
      quantity: 11,
      attributes: [
        {
          name: "Size",
          value: "Length:2.5 m & Width:36 inches approximately",
        },
        {
          name: "Material",
          value: "Cotton",
        },
        {
          name: "Color",
          value:
            "Blue & Red and white. Colours on the actual product may vary slightly.",
        },
      ],
      description:
        "Striking and stunning, this beautiful handwoven Telia Rumal dupatta will make for a distinctive addition to your wardrobe. The Ikat combines the beauty of tradition and the ability to adapt to the most modern renditions. Our earliest visual reference to the Ikat comes from the murals of the Ajanta caves, which go back 1,200-1,600 years. The Ikat is a unique weave, where the threads of the warp or the weft are patiently tied and then dyed multiple times, depending on the number of colours used. It is believed that this form of weaving travelled across the world from India. Quantity: 1 piece Care instructions: Hand wash separately in cold water, using mild detergent. This product is handwoven by our artisans and may have slight irregularities.",
    },
    {
      tags: ["accessories", "Holiday Accessories", "UX_TAG_TRENDING"],
      price: {
        amount: "900.0",
        currencyCode: "INR",
      },
      title: "Lambani Darpana Necklace in Cheery Yellow",
      handle: "lambani-darpana-necklace-cheery-yellow",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329485250858",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_142625-192968.jpg?v=1683005824",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_142625-192968.jpg?v=1683005824",
              width: 2048,
              height: 2048,
              altText: null,
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_142625-192968.jpg?v=1683005824",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_142625-192968.jpg?v=1683005824",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQ4NTI1MDg1OCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329485250858",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_142625-192968.jpg?v=1683005824",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_142625-192968.jpg?v=1683005824",
            width: 2048,
            height: 2048,
            altText: null,
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_142625-192968.jpg?v=1683005824",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20211214_142625-192968.jpg?v=1683005824",
          },
        ],
      },
      quantity: 2,
      attributes: [
        {
          name: "Size",
          value: "Short - 5 inch & Long - 16 inch",
        },
        {
          name: "Material",
          value: "Cotton thread + beads + mirrors",
        },
        {
          name: "Colour",
          value:
            "The colours seen in the image may vary from the actual product due to photographic lighting source, different computer screen resolutions and displays.",
        },
      ],
      description:
        "While traveling through the Sandur village in Karnataka one gets introduced to the community of Lambani women wearing full embroidered traditional clothes, selling beautifully crafted pieces of art. The vibrant tribal art form traced back from the deserts of Rajasthan has today even received international recognition owing to its universal appeal. This red and blue Lambani necklace is sure to add elegance to your look. The necklace is authentic, handmade and sourced from the local Lambani artisans. While the Lambanis believe in celebrating life, we have made available this Lambani choker online to celebrate them and their art. Quantity: 1 piece Care instructions: Store your jewellery in it's own box or pouch to prevent scratching, chipping and entanglement. Keep away from humidity, moisture, fragrance and water. Use delicately.",
    },
    {
      tags: ["home decor"],
      price: {
        amount: "1050.0",
        currencyCode: "INR",
      },
      title: "Dhokra Harini Wall Hook",
      handle: "harini-dhokra-hook",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41104421028138",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/HariniDhokraHook5_2_-262.jpg?v=1680692289",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/HariniDhokraHook5_2_-262.jpg?v=1680692289",
              width: 1600,
              height: 1600,
              altText: null,
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/HariniDhokraHook5_2_-262.jpg?v=1680692289",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/HariniDhokraHook5_2_-262.jpg?v=1680692289",
            },
            cursor: "eyJsYXN0X2lkIjo0MTEwNDQyMTAyODEzOCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41104421028138",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/HariniDhokraHook5_2_-262.jpg?v=1680692289",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/HariniDhokraHook5_2_-262.jpg?v=1680692289",
            width: 1600,
            height: 1600,
            altText: null,
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/HariniDhokraHook5_2_-262.jpg?v=1680692289",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/HariniDhokraHook5_2_-262.jpg?v=1680692289",
          },
        ],
      },
      quantity: 19,
      attributes: [
        {
          name: "Size",
          value: "8x3 inches",
        },
        {
          name: "Material",
          value: "Brass",
        },
      ],
      description:
        "Use this beautifully crafted Dhokra wall hook for hanging clothes, hand towels and other knick-knacks to keep your home organized. For thousands of years, tribes stretching across the central belt of India have been using the wax metal casting method to practice this art. Even the ancient Bronze Age Harappans used this very technique. Still rooted to the earth, Dhokra art is inspired by the everyday life and beliefs of these ancient tribes. Quantity: 1 piece Care Instructions: Brass tarnishes with time, giving it a beautiful antique look. However, if you prefer to maintain the sheen, clean regularly with a soft dry cloth.Keep away from moisture and abrasive cleaning agents. This is a handcrafted product that may have sharp edges. Handle gently and carefully. Ships within 7-15days. For Bulk Orders delivery time may vary.",
    },
    {
      tags: ["UX_TAG_TRENDING"],
      price: {
        amount: "10000.0",
        currencyCode: "INR",
      },
      title: "Black, Beige And Gold Stripes Handwoven Pashmina Stole",
      handle: "black-beige-and-gold-stripes-handwoven-pashmina-stole",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329442226474",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Black_BeigeAndGoldStripesHandwovenPashminaStole1-611651.jpg?v=1683005513",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Black_BeigeAndGoldStripesHandwovenPashminaStole1-611651.jpg?v=1683005513",
              width: 650,
              height: 650,
              altText:
                "Beautiful Black, Beige And Gold Stripes Handwoven Pashmina Stole Online ",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Black_BeigeAndGoldStripesHandwovenPashminaStole1-611651.jpg?v=1683005513",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Black_BeigeAndGoldStripesHandwovenPashminaStole1-611651.jpg?v=1683005513",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQ0MjIyNjQ3NCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329442226474",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Black_BeigeAndGoldStripesHandwovenPashminaStole1-611651.jpg?v=1683005513",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Black_BeigeAndGoldStripesHandwovenPashminaStole1-611651.jpg?v=1683005513",
            width: 650,
            height: 650,
            altText:
              "Beautiful Black, Beige And Gold Stripes Handwoven Pashmina Stole Online ",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Black_BeigeAndGoldStripesHandwovenPashminaStole1-611651.jpg?v=1683005513",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/Black_BeigeAndGoldStripesHandwovenPashminaStole1-611651.jpg?v=1683005513",
          },
        ],
      },
      quantity: 7,
      attributes: [
        {
          name: "Size",
          value: "200cm x 70cm",
        },
        {
          name: "Material",
          value: "100% Pure Cashmere Pashmina",
        },
        {
          name: "Color",
          value: "Black, Beige",
        },
      ],
      description:
        "This splendid beauty in beige with black stripes is made of pure pashmina - the finest grade of cashmere wool there is. The fibre is so delicate that it has to be handwoven on a traditional wooden loom. This uniqe stole has some golden zari woven into the pattern that gives it a subtle bling. Accessorize your contemporary outfits with this beauty or even pair with your traditional clothes - this stole is one of a kind. Please note that all products are individually crafted by skilled artisans. Slight variations add to the unique beauty and personality of each piece. Size: 200cm x 70cm Weight: 95-110gms Fabric: 100% Pure Cashmere Pashmina Pashmina Care: Dry clean only. Avoid hanging on a hanger and instead fold and keep it. Store the pashmina in a cotton bag or wrap it in a soft cloth, away from direct sunlight. Shipping: Your pashmina will be packed and dispatched from our office within 3-4 working days",
    },
    {
      tags: [
        "bastar",
        "bastar craft",
        "black metal",
        "CAT_WOMENYOGABOTTOMS",
        "handcrafted",
        "handcrafted in india",
        "handmade",
        "handmade by artisans",
        "handmade in india",
        "home decor",
        "Indian art",
        "Indian crafts",
        "iron craft",
        "PT_CAT_YOGAWOMENBOTTOMS",
        "wrought iron",
      ],
      price: {
        amount: "3000.0",
        currencyCode: "INR",
      },
      title: "Bastar Wrought Iron Tiered",
      handle: "bastar-wrought-iron-unnamed",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329438458154",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC_8603-333065.jpg?v=1683005500",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC_8603-333065.jpg?v=1683005500",
              width: 2048,
              height: 2048,
              altText: "Tribal Bastar Art Wrought Iron Tiered-1",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC_8603-333065.jpg?v=1683005500",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC_8603-333065.jpg?v=1683005500",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQzODQ1ODE1NCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329438458154",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC_8603-333065.jpg?v=1683005500",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC_8603-333065.jpg?v=1683005500",
            width: 2048,
            height: 2048,
            altText: "Tribal Bastar Art Wrought Iron Tiered-1",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC_8603-333065.jpg?v=1683005500",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC_8603-333065.jpg?v=1683005500",
          },
        ],
      },
      quantity: 30,
      attributes: [
        {
          name: "Material",
          value: "Iron",
        },
        {
          name: "Size",
          value: "43 Inch x 12 Inch",
        },
      ],
      description:
        "A long, wall hanging to brighten up your home! This handcrafted beauty comes from the heart of India's tribal belt of Bastar reflecting the rural lifestyle of the tribal community. Lohshilp (Wrought Iron Craft) is one of the most unique and the oldest craft forms of Bastar. The Bastar region is one of the richest areas in terms of iron ore deposits in India. The art originated from the Iron Smith Community that used to make farming and hunting implements for tribes. Over the years, the craft has evolved into a revered artistic form. Quantity: 1 piece. Candles not included. Care Instructions: Iron rusts with time. However, if you prefer to maintain the sheen, clean regularly with a soft dry cloth .Keep away from moisture and abrasive cleaning agents. This is a handcrafted product that may have sharp edges and slight design variations. Some products may need minor adjustments to balance. Ships within 7-21days.",
    },
    {
      tags: [
        "bastar",
        "bastar craft",
        "black metal",
        "CAT_WOMENYOGABOTTOMS",
        "handcrafted",
        "handcrafted in india",
        "handmade",
        "handmade by artisans",
        "handmade in india",
        "home decor",
        "Indian art",
        "Indian crafts",
        "iron craft",
        "PT_CAT_YOGAWOMENBOTTOMS",
        "wrought iron",
      ],
      price: {
        amount: "2600.0",
        currencyCode: "INR",
      },
      title: "Bastar Wrought Iron Swirl",
      handle: "bastar-wrought-iron-unnamed-1",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329438359850",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC-8730-_1-985614.jpg?v=1683005500",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC-8730-_1-985614.jpg?v=1683005500",
              width: 2048,
              height: 2048,
              altText: "Tribal Bastar Art Wrought Iron Swirl-1",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC-8730-_1-985614.jpg?v=1683005500",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC-8730-_1-985614.jpg?v=1683005500",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQzODM1OTg1MCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329438359850",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC-8730-_1-985614.jpg?v=1683005500",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC-8730-_1-985614.jpg?v=1683005500",
            width: 2048,
            height: 2048,
            altText: "Tribal Bastar Art Wrought Iron Swirl-1",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC-8730-_1-985614.jpg?v=1683005500",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/DSC-8730-_1-985614.jpg?v=1683005500",
          },
        ],
      },
      quantity: 6,
      attributes: [
        {
          name: "Material",
          value: "Iron",
        },
        {
          name: "Size",
          value: "40 Inch x 9 Inch",
        },
      ],
      description:
        "Black metal that looks striking against a wall in your home. Add instant beauty to your wall with this beautiful candle holder. This handcrafted beauty comes from the heart of India's tribal belt of Bastar reflecting the rural lifestyle of the tribal community. Lohshilp (Wrought Iron Craft) is one of the most unique and the oldest craft forms of Bastar. The Bastar region is one of the richest areas in terms of iron ore deposits in India. The art originated from the Iron Smith Community that used to make farming and hunting implements for tribes. Over the years, the craft has evolved into a revered artistic form. Quantity: 1 piece. Candles not included. Care Instructions: Iron rusts with time. However, if you prefer to maintain the sheen, clean regularly with a soft dry cloth .Keep away from moisture and abrasive cleaning agents. This is a handcrafted product that may have sharp edges and slight design variations. Some products may need minor adjustments to balance. Ships within 7-21days.",
    },
    {
      tags: [
        "bamboo basket",
        "basket",
        "fruit basket",
        "handcrafted",
        "handmade",
        "handwoven",
        "naturally dyed basket",
        "west bengal",
      ],
      price: {
        amount: "1100.0",
        currencyCode: "INR",
      },
      title: "Bamboo Basket Monochrome",
      handle: "monochrome-bamboo-basket",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329434951978",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/3-748-_1-279798.jpg?v=1683005484",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/3-748-_1-279798.jpg?v=1683005484",
              width: 1600,
              height: 1600,
              altText: "Handmade Bamboo Basket Monochrome",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/3-748-_1-279798.jpg?v=1683005484",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/3-748-_1-279798.jpg?v=1683005484",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQzNDk1MTk3OCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329434951978",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/3-748-_1-279798.jpg?v=1683005484",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/3-748-_1-279798.jpg?v=1683005484",
            width: 1600,
            height: 1600,
            altText: "Handmade Bamboo Basket Monochrome",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/3-748-_1-279798.jpg?v=1683005484",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/3-748-_1-279798.jpg?v=1683005484",
          },
        ],
      },
      quantity: 21,
      attributes: [
        {
          name: "Size",
          value: "7.5x7.5x3 inches",
        },
        {
          name: "Material",
          value: "Natural bamboo dyed with azo free dyes",
        },
        {
          name: "Colour",
          value: "Colours on the actual product may vary slightly.",
        },
      ],
      description:
        "This attractive Bamboo Basket Monochrome on display is handmade by cutting Bamboo and splitting it into slivers by hand. This Bamboo Basket Monochrome is then dip-dyed in lead free, AZO free colours to create a safe, non-toxic woven fruit basket that can also double up as a beautiful storage organizer. Basket weaving is one of the age-old crafts practiced in India. These finely crafted baskets have been made by the artisans of the Purba Medinipur district of West Bengal. They have been creating these bamboo products from locally available natural materials for generations. Quantity: 1 piece Care instructions: Clean with a soft, damp cloth and dry thoroughly in shade. Store away from dust, moisture and excessive sunlight. Ships within 7days.",
    },
    {
      tags: [
        "banarasi saree",
        "banarsai",
        "banarsi silk saree",
        "benarasi",
        "benarasi brocade",
        "benarasi silk",
        "benarasi silk saree",
        "brocade",
        "brocade saree",
        "handloom saree",
        "Natural Silk",
        "saree",
        "Silk",
        "silk brocade",
        "silk handloom saree",
        "silk saree",
        "UX_TAG_BEST_SELLER",
      ],
      price: {
        amount: "31500.0",
        currencyCode: "INR",
      },
      title: "Banarasi Pure Brocade Orange & Fuchsia  Saree",
      handle: "banarasi-pure-brocade-orange-fuchsia-saree",
      images: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductImage/41329435574570",
              src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BanarasiPureBrocadeOrange_FuchsiaSaree1-577554.jpg?v=1683005486",
              url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BanarasiPureBrocadeOrange_FuchsiaSaree1-577554.jpg?v=1683005486",
              width: 800,
              height: 800,
              altText:
                "Shop Banarasi Brocade Orange & Fuchsia Pure Silk Sarees For Women",
              originalSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BanarasiPureBrocadeOrange_FuchsiaSaree1-577554.jpg?v=1683005486",
              transformedSrc:
                "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BanarasiPureBrocadeOrange_FuchsiaSaree1-577554.jpg?v=1683005486",
            },
            cursor: "eyJsYXN0X2lkIjo0MTMyOTQzNTU3NDU3MCwibGFzdF92YWx1ZSI6MX0=",
          },
        ],
        nodes: [
          {
            id: "gid://shopify/ProductImage/41329435574570",
            src: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BanarasiPureBrocadeOrange_FuchsiaSaree1-577554.jpg?v=1683005486",
            url: "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BanarasiPureBrocadeOrange_FuchsiaSaree1-577554.jpg?v=1683005486",
            width: 800,
            height: 800,
            altText:
              "Shop Banarasi Brocade Orange & Fuchsia Pure Silk Sarees For Women",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BanarasiPureBrocadeOrange_FuchsiaSaree1-577554.jpg?v=1683005486",
            transformedSrc:
              "https://cdn.shopify.com/s/files/1/0745/3953/2586/products/BanarasiPureBrocadeOrange_FuchsiaSaree1-577554.jpg?v=1683005486",
          },
        ],
      },
      quantity: 8,
      attributes: [
        {
          name: "Material",
          value: "Pure Silk",
        },
      ],
      description:
        "An exquisite almost bridal drape, golden intricate designs on flowing silk, here is a riveting pure Banarasi katan silk brocade saree. A study in grandeur and vibrance, and the rarest of beauty, this dazzling creation is more than attractive. The ghats and silks of Banaras have a strong connection- they both represent a confluence of roads and travelers who have passed through this city. This is reflected in the mixed influences seen on the sarees- Persian, Chinese, Southeast Asian and different parts of the Indian subcontinent. Varanasi was a well-known cotton weaving hub during the early Buddhist period. Even though the fineness of Banarasi silks has been mentioned in Buddhist texts, silks gained prominence here during the time of the Mughal Emperor, Akbar(1556-1605 CE) and it is during his time that the introduction of Persian motifs took place. With the influx of skilled brocade weavers from Gujarat and an amalgamation with all the various influences the many specialized weaves that Banaras is so renowned for came into being. This saree is brought to Peepul Tree by Mrinalini. Mrinalini is a platform to help handloom weavers across the country with the aim to preserve and protect India's treasured craft heritage. Mrinalini passionately honours the ageless knowledge of India's finest weavers while preserving traditional handloom techniques. All Mrinalini sarees are made from high quality, natural yarns. Quantity-1 saree with blouse piece. Ships within 7-15days. In order to maintain fairness to our artisans, as well as to keep our prices fair, this product is not returnable and non refundable. Care instructions-Professional Dry Clean Only. This product is handwoven by artisans on traditional looms and may have slight irregularities that are a natural outcome of the human involvement in the process. Naturally dyed fabrics and threads may bleed. Store garment separately, away from sunlight without exposure to any moisture. Air the textile every few months so that you may enjoy this drape for many years to come. The colours seen in the image may vary from the actual product due to photographic lighting source, different computer screen resolutions and displays.",
    },
  ]);

  const cart = useSelector(selectCart);

  const [showModal, setShowModal] = useState(false);
  return (
    <div className="relative">
      {showModal && (
        <Checkout setShowModal={setShowModal} showModal={showModal} />
      )}

      {cart?.length > 0 && (
        <div className="fixed top-10 right-5">
          <button
            className="p-2 bg-[blue] text-[#fff] font-semibold"
            onClick={() => setShowModal(!showModal)}
          >
            Checkout
          </button>
        </div>
      )}
      <div className="flex justify-center items-center flex-wrap gap-5 mt-5">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
