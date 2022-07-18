import { ProductItem } from "../products";

import { Category, CategoryContainer } from "./styles";

import bosInfo from "../../../public/box.png"
import bisnagaSInfo from "../../../public/bisn.png"
import frascoSInfo from "../../../public/frascos.png"


export function CategorySection() {

  return (
      <Category>
        <CategoryContainer>
        <ProductItem
          title={"Melatonina 5Mg 100 Doses"}
          price={"R$ 129.99"}
          img={bosInfo}
        />
        <ProductItem
          title={"Melatonina 5Mg 100 Doses"}
          price={"R$ 19.99"}
          img={frascoSInfo}
        />
        <ProductItem
          title={"Melatonina 5Mg 100 Doses"}
          price={"R$ 10.99"}
          img={bisnagaSInfo}
        />
        <ProductItem
          title={"Melatonina 5Mg 100 Doses"}
          price={"R$ 129.99"}
          img={frascoSInfo}
        />
         <ProductItem
          title={"Melatonina 5Mg 100 Doses"}
          price={"R$ 149.99"}
          img={bosInfo}
        />
        <ProductItem
          title={"Melatonina 5Mg 100 Doses"}
          price={"R$ 82.99"}
          img={frascoSInfo}
        />
        <ProductItem
          title={"Melatonina 5Mg 100 Doses"}
          price={"R$ 129.99"}
          img={frascoSInfo}
        />
        <ProductItem
          title={"Melatonina 5Mg 100 Doses"}
          price={"R$ 129.99"}
          img={bisnagaSInfo}
        />
        
        </CategoryContainer>
      </Category>
  )
}