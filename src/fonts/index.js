import { fontSizePercentage } from "../helpers/pixelRatios";

export const fontFamily = {
    fontFamilyBold : 'RedHatText-Bold',
    fontFamilyRegular : 'RedHatText-Regular',
    fontFamilyMedium : 'RedHatText-Medium',

}

export const colors = {
    backgroundColor : "rgba(15, 15, 15, 1)",
    secundary :  "rgba(28, 28, 28, 1)",
    verde : "rgba(106,180,137,1)",
    amarelo : "#F2C94C",
    laranja : "#F2994A"
}

export const fontSize = {
    small : fontSizePercentage(16),
    medium : fontSizePercentage(18),
    large : fontSizePercentage(35),
    semi_small : fontSizePercentage(18),
    semi_medium : fontSizePercentage(24),
    semi_large : 20
}