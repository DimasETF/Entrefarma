import { ProductItem } from "../products";

import { Category, CategoryItem, HeaderCategory } from "./styles";
import frascoComInfo from "../../../public/frasco.png"
import bosInfo from "../../../public/box.png"
import bisnagaSInfo from "../../../public/bisn.png"
import frascoSInfo from "../../../public/frascos.png"


export function CategorySection() {
  
  return (
    <>
       <Category>
        <HeaderCategory>
          <h1>Queda Capilar</h1>
        </HeaderCategory>
        <CategoryItem>
          <ProductItem
            title={"Morosil - 30 Cápsulas "}
            price={"R$ 49.99"}
            img={frascoComInfo}
          />
          <ProductItem
            title={"Omega 3 - 150 Cápsulas"}
            price={"R$ 69.99"}
            img={bosInfo}
          />
          <ProductItem
            title={"Melatonina 5Mg 100 Doses"}
            price={"R$ 129.99"}
            img={frascoSInfo}
          />
          <ProductItem
            title={"Melatonina 5Mg 100 Doses"}
            price={"R$ 129.99"}
            img={bosInfo}
          />
          <ProductItem
            title={"Melatonina 5Mg 100 Doses"}
            price={"R$ 129.99"}
            img={bisnagaSInfo}
          />
          <ProductItem
            title={"Melatonina 5Mg 100 Doses"}
            price={"R$ 129.99"}
            img={frascoSInfo}
          />
          <ProductItem
            title={"Melatonina 5Mg 100 Doses"}
            price={"R$ 129.99"}
            img={frascoSInfo}
          />
        </CategoryItem>
      </Category>

      <Category>
        <HeaderCategory>
          <h1>Dermocosmeticos</h1>
        </HeaderCategory>
        <CategoryItem>
          <ProductItem
            title={"Morosil - 30 Cápsulas "}
            price={"R$ 49.99"}
            img={frascoComInfo}
          />
          <ProductItem
            title={"Omega 3 - 150 Cápsulas"}
            price={"R$ 69.99"}
            img={bosInfo}
          />
          <ProductItem
            title={"Melatonina 5Mg 100 Doses"}
            price={"R$ 129.99"}
            img={frascoSInfo}
          />
          <ProductItem
            title={"Melatonina 5Mg 100 Doses"}
            price={"R$ 129.99"}
            img={bosInfo}
          />
          <ProductItem
            title={"Melatonina 5Mg 100 Doses"}
            price={"R$ 129.99"}
            img={bisnagaSInfo}
          />
          <ProductItem
            title={"Melatonina 5Mg 100 Doses"}
            price={"R$ 129.99"}
            img={frascoSInfo}
          />
          
        </CategoryItem>
      </Category>

      
    </>
  )

}