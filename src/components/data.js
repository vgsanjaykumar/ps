import img2 from "/award/img02.jpeg";
import img3 from "/award/img03.jpeg";
import img4 from "/award/img04.jpeg";
import img5 from "/award/img05.jpeg";
import img6 from "/award/img06.jpeg";
import img7 from "/award/img07.jpeg";

import can00 from "/award/cad00.jpeg";
import can01 from "/award/cad01.jpeg";
import can03 from "/award/cad03.jpeg";
import can04 from "/award/cad04.jpeg";
import can05 from "/award/cad05.jpeg";
import can06 from "/award/cad06.jpeg";
import can07 from "/award/cad07.jpeg";
import can08 from "/award/cad08.jpeg";
import can09 from "/award/cad09.jpeg";

import baby1 from "/Baby/Baby1.webp"
import baby2 from "/Baby/baby2.jpg"
import baby3 from "/Baby/baby3.jpg"
import baby4 from "/Baby/baby4.jpg"
import baby5 from "/Baby/baby5.jpg"
import baby6 from "/Baby/baby6.jpg"

const heights = [
    "h-[250px]",
    "h-[350px]",
    "h-[400px]",
    "h-auto",
    "h-[275px]",
    "h-[320px]",
];
export const Data = [img2, img3, img4, img5, img6, img7];
export const Babyset = [baby1, baby2, baby3, baby4, baby5, baby6, baby1, baby2, baby3, baby4, baby5, baby6,].map((src, index) => ({
    src,
    height: heights[index % heights.length],
}));

// ✅ Wedding dataset with heights included
export const OutdoorDataset = [
    {
        id: 1,
        name: "Varuna Thapar + Nikhil Sayli",
        image: img2, // cover image
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 2,
        name: "Janani + Arvind",
        image: can09, // cover image
        images: [can09, can08, can07, can06, can05, can04, can03, can01, can00].map(
            (src, index) => ({
                src,
                height: heights[index % heights.length],
            })
        ),
    },
    {
        id: 3,
        name: "Mani + Nikhil Sayli",
        image: img2,
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 4,
        name: "karupu + sonia",
        image: img4, // cover image
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 5,
        name: "Janani + Arvind",
        image: can09, // cover image
        images: [can09, can08, can07, can06, can05, can04, can03, can01, can00].map(
            (src, index) => ({
                src,
                height: heights[index % heights.length],
            })
        ),
    },
    {
        id: 6,
        name: "Mani + Nikhil Sayli",
        image: img2,
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 7,
        name: "Varuna Thapar + Nikhil Sayli",
        image: img2, // cover image
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 8,
        name: "Janani + Arvind",
        image: can09, // cover image
        images: [can09, can08, can07, can06, can05, can04, can03, can01, can00].map(
            (src, index) => ({
                src,
                height: heights[index % heights.length],
            })
        ),
    },
    {
        id: 9,
        name: "Mani + Nikhil Sayli",
        image: img2,
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 10,
        name: "karupu + sonia",
        image: img4, // cover image
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 11,
        name: "Janani + Arvind",
        image: can09, // cover image
        images: [can09, can08, can07, can06, can05, can04, can03, can01, can00].map(
            (src, index) => ({
                src,
                height: heights[index % heights.length],
            })
        ),
    },
    {
        id: 12,
        name: "Mani + Nikhil Sayli",
        image: img2,
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
];
export const PrewedDataset = [
    {
        id: 1,
        name: "Varuna + Siva",
        image: img7, // cover image
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 2,
        name: "Nandha + Janai",
        image: can09, // cover image
        images: [can09, can08, can07, can06, can05, can04, can03, can01, can00].map(
            (src, index) => ({
                src,
                height: heights[index % heights.length],
            })
        ),
    },
    {
        id: 3,
        name: "Mani + Melody",
        image: img2,
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
];
export const PostwedDataset = [
    {
        id: 1,
        name: "Varuna Thapar + Nikhil Sayli",
        image: img2, // cover image
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 2,
        name: "Janani + Arvind",
        image: can09, // cover image
        images: [can09, can08, can07, can06, can05, can04, can03, can01, can00].map(
            (src, index) => ({
                src,
                height: heights[index % heights.length],
            })
        ),
    },
    {
        id: 3,
        name: "Mani + Nikhil Sayli",
        image: img2,
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
];
export const CoupleProtraitsDataset = [
    {
        id: 1,
        name: "Varuna Thapar + Nikhil Sayli",
        image: img2, // cover image
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 2,
        name: "Janani + Arvind",
        image: can09, // cover image
        images: [can09, can08, can07, can06, can05, can04, can03, can01, can00].map(
            (src, index) => ({
                src,
                height: heights[index % heights.length],
            })
        ),
    },
    {
        id: 3,
        name: "Mani + Nikhil Sayli",
        image: img2,
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 4,
        name: "karupu + sonia",
        image: img4, // cover image
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 5,
        name: "Janani + Arvind",
        image: can09, // cover image
        images: [can09, can08, can07, can06, can05, can04, can03, can01, can00].map(
            (src, index) => ({
                src,
                height: heights[index % heights.length],
            })
        ),
    },
    {
        id: 6,
        name: "Mani + Nikhil Sayli",
        image: img2,
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 7,
        name: "Varuna Thapar + Nikhil Sayli",
        image: img2, // cover image
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 8,
        name: "Janani + Arvind",
        image: can09, // cover image
        images: [can09, can08, can07, can06, can05, can04, can03, can01, can00].map(
            (src, index) => ({
                src,
                height: heights[index % heights.length],
            })
        ),
    },
    {
        id: 9,
        name: "Mani + Nikhil Sayli",
        image: img2,
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 10,
        name: "karupu + sonia",
        image: img4, // cover image
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 11,
        name: "Janani + Arvind",
        image: can09, // cover image
        images: [can09, can08, can07, can06, can05, can04, can03, can01, can00].map(
            (src, index) => ({
                src,
                height: heights[index % heights.length],
            })
        ),
    },
    {
        id: 12,
        name: "Mani + Nikhil Sayli",
        image: img2,
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
];
export const PortraitsDataset = [
    {
        id: 1,
        name: "Nikhil Sayli",
        image: can03, // cover image
        images: [can01, can03, can04, can05, can06, can07].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 2,
        name: "JANANI",
        image: can04, // cover image
        images: [can01, can03, can04, can05, can06, can07].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 3,
        name: "Mani + Nikhil Sayli",
        image: img2,
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 4,
        name: "karupu + sonia",
        image: img4, // cover image
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 5,
        name: "Janani + Arvind",
        image: can09, // cover image
        images: [can09, can08, can07, can06, can05, can04, can03, can01, can00].map(
            (src, index) => ({
                src,
                height: heights[index % heights.length],
            })
        ),
    },
    {
        id: 6,
        name: "Mani + Nikhil Sayli",
        image: img2,
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 7,
        name: "Varuna Thapar + Nikhil Sayli",
        image: img2, // cover image
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 8,
        name: "Janani + Arvind",
        image: can09, // cover image
        images: [can09, can08, can07, can06, can05, can04, can03, can01, can00].map(
            (src, index) => ({
                src,
                height: heights[index % heights.length],
            })
        ),
    },
    {
        id: 9,
        name: "Mani + Nikhil Sayli",
        image: img2,
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 10,
        name: "karupu + sonia",
        image: img4, // cover image
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 11,
        name: "Janani + Arvind",
        image: can09, // cover image
        images: [can09, can08, can07, can06, can05, can04, can03, can01, can00].map(
            (src, index) => ({
                src,
                height: heights[index % heights.length],
            })
        ),
    },
    {
        id: 12,
        name: "Mani + Nikhil Sayli",
        image: img2,
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
];
export const CanditDataset = [
    {
        id: 1,
        name: "Nikhil Sayli",
        image: can03, // cover image
        images: [can01, can03, can04, can05, can06, can07].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 2,
        name: "JANANI",
        image: can04, // cover image
        images: [can01, can03, can04, can05, can06, can07].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 3,
        name: "Mani + Nikhil Sayli",
        image: img2,
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 4,
        name: "karupu + sonia",
        image: img4, // cover image
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 5,
        name: "Janani + Arvind",
        image: can09, // cover image
        images: [can09, can08, can07, can06, can05, can04, can03, can01, can00].map(
            (src, index) => ({
                src,
                height: heights[index % heights.length],
            })
        ),
    },
    {
        id: 6,
        name: "Mani + Nikhil Sayli",
        image: img2,
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 7,
        name: "Varuna Thapar + Nikhil Sayli",
        image: img2, // cover image
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 8,
        name: "Janani + Arvind",
        image: can09, // cover image
        images: [can09, can08, can07, can06, can05, can04, can03, can01, can00].map(
            (src, index) => ({
                src,
                height: heights[index % heights.length],
            })
        ),
    },
    {
        id: 9,
        name: "Mani + Nikhil Sayli",
        image: img2,
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 10,
        name: "karupu + sonia",
        image: img4, // cover image
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
    {
        id: 11,
        name: "Janani + Arvind",
        image: can09, // cover image
        images: [can09, can08, can07, can06, can05, can04, can03, can01, can00].map(
            (src, index) => ({
                src,
                height: heights[index % heights.length],
            })
        ),
    },
    {
        id: 12,
        name: "Mani + Nikhil Sayli",
        image: img2,
        images: [img2, img3, img4, img5, img6, img7].map((src, index) => ({
            src,
            height: heights[index % heights.length],
        })),
    },
];


export const Canimg = [
    can09,
    can08,
    can07,
    can06,
    can05,
    can04,
    can03,
    can01,
    can00,
];
