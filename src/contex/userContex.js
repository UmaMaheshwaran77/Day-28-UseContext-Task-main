import { createContext, useState } from "react";


let UserContext = createContext();

export const UserProvider = ({ children }) => {


    const details = [{
        id: 1,
        img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ3FlsCfSdu-G6JFIogpCXqUnl17e7yiUTsDeYkMLnDDV1xbf9fH18wWcPuHoMzLr_RtlpQo2fgm6OCD09LVKwppZBwqIjK&usqp=CAE",
      title: "Oppo Reno 10 5G",
        sub: "Best Selling Flash Phones",
        description: "12 GB RAM | 256 GB ROM, 17.02 cm (6.7 inch) Full HD+ Display, 50MP + 32MP + 8MP | 32MP Front Camera,4600 mAh Battery",

        offer: true,
        rating: false,
h:"₹39,999",
        g: "₹44,999"

    },
    {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUW5dPH8sXgPfe2ffPgUWf4ztRR7YFqLyxNA&usqp=CAU",
        title: "Apple iPhone X",
        sub: "Latest Launche",
        description: "A11 Bionic Chip with 64-bit Architecture, Neural Engine, Embedded M11 Motion Coprocessor Processor",

        offer: true,
        rating: true,

        g: "₹79,900",
        h: "₹60,999"

    },
    {
        id: 3,
        img: "https://m.media-amazon.com/images/I/41Xe96WtZoL._SX300_SY300_QL70_FMwebp_.jpg",
        title: "One Plus Nord CE 2 Lite 5G ",
        sub: "Exclusive Product",
        description: "6 GB RAM | 128 GB ROM,16.74 cm (6.59 inch) Display,64MP Rear Camera | 16MP Front Camera, 5000 mAh Battery",

        offer: true,
        rating: false,

        g: "₹19,999",
        h: "₹15,679"

    },
    {
        id: 4,
        img: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/a/k/-original-imagqx45wnzbh25s.jpeg?q=70",
        title: "Motorola Edge 40",
        sub: "Rare Product",
        description: "8 GB RAM | 128 GB ROM,16.64 cm (6.55 inch) Full HD+ Display,50MP + 13MP | 32MP Front Camera, 5000 mAh Battery",

        offer: false,
        rating: true,

        g: "₹19,999"

    },
    {
        id: 5,
        img: "https://m.media-amazon.com/images/I/81fVPmkBsIL._SX569_.jpg",
        title: "Samsung Galaxy F13",
        sub: "Fancy Product",
        description: "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB,16.76 cm (6.6 inch) Full HD+ Display, 50MP + 5MP + 2MP | 8MP Front Camera, 6000 mAh Lithium Ion Battery",

        offer: true,
        rating: false,

        g: "₹16,999",
        h: "₹14,990"

    },
    {
        id: 6,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKz7YbVWOY1zcqH2gjejjSgNHOsqKdSpGaek-0YkrbZB68nIClE5BlCV7Qm1D8nBco3Yo&usqp=CAU",
              title: "Real Me",
        sub: "Smart and Fancy Product",
        description: "4 GB RAM | 64 GB ROM | Expandable Upto 2 TB,17.12 cm (6.74 inch) HD Display,50MP + 0.08MP | 5MP Front Camera,5000 mAh Battery",

        offer: false,
        rating: false,

        g: "₹22,999",
        h: "₹19,999"

    },
    {
        id: 7,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yu5C2C2Kl9IaJni1TIT9S0EFrrhGY9YynA&usqp=CAU",
        title: "Vivo Y17s",
        sub: "New Realise Product",
        description: "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB,16.66 cm (6.56 inch) HD+ Display,50MP + 2MP | 8MP Front Camera,5000 mAh Battery",

        offer: true,
        rating: true,

        g: "₹16,999 ",
        Price: " ₹13,509"

    },
    {
        id: 8,
        img: "data:image/jpeg;base64,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",
        title: "Redmi 12c",
        sub: " Product Master Brand",
        description: "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB,17.04 cm (6.71 inch) HD+ Display, 50MP Rear Camera | 5MP Front Camera,5000 mAh Battery",

        offer: false,
        rating: true,

        g: "₹17,909"

    },
    ]

const [cart,setCart]=useState([]);

    return (
        <UserContext.Provider value={{ details,cart,setCart}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext