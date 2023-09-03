import React from 'react'
import {
    HiOutlineColorSwatch,
    HiOutlineDesktopComputer,
    HiOutlineTemplate,
    HiOutlineViewGridAdd,
    HiOutlineHome,
} from 'react-icons/hi'
import { TbCategory2, TbFlag2 } from 'react-icons/tb'
import { BiSolidCity } from 'react-icons/bi'
import { BsBuildingGear, BsGear, BsImage } from 'react-icons/bs'
import { LiaCitySolid } from 'react-icons/lia'
import { MdOutlineBrandingWatermark, MdOutlineWarehouse } from 'react-icons/md'
import { LuNewspaper } from 'react-icons/lu'
import { PiShoppingBag } from 'react-icons/pi'

const navigationIcon = {
    home: <HiOutlineHome />,
    singleMenu: <HiOutlineViewGridAdd />,
    collapseMenu: <HiOutlineTemplate />,
    groupSingleMenu: <HiOutlineDesktopComputer />,
    groupCollapseMenu: <HiOutlineColorSwatch />,
    category: <TbCategory2 />,
    flag: <TbFlag2 />,
    city: <LiaCitySolid />,
    manufacturer: <BsBuildingGear />,
    brand: <MdOutlineBrandingWatermark />,
    warehouse: <MdOutlineWarehouse />,
    newsletter: <LuNewspaper />,
    banner: <BsImage />,
    gear: <BsGear />,
    product: <PiShoppingBag />,
}

export default navigationIcon
