import cat1 from "../assets/cat-1.png";
import cat2 from "../assets/cat-2.png";
import cat3 from "../assets/cat-3.png";
import cat4 from "../assets/cat-4.png";
import cat5 from "../assets/cat-5.png";
import Products from "../components/layout/Products";
import Search from "../components/icons/Search";
import CategoryCard from "../components/ui/CategoryCard";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-green-700/10 to-white px-4 md:px-16 py-8">
        <div className="flex flex-col gap-8 items-center">
          <div className="md:w-2/3">
            <div className="text-4xl text-center  md:text-6xl mb-8 heading text-green-900">
              Shop Everything, Anytime, Anywhere.
            </div>
            <div>
              <p className="text-center  text-neutral-500">
                Welcome to Gelo – your ultimate one-stop shop for everything.
                From tech to toys, fashion to home goods – we’ve got it all.
                Unbeatable deals, fast delivery, and thousands of products at
                your fingertips. Shop smarter, live better – only at Gelo.
              </p>
            </div>
            <div className="mt-8">
              <form action="/">
                <div className="bg-white border border-neutral-200 md:w-2/3 mx-auto rounded-full flex gap-4 justify-between">
                  <input
                    type="search"
                    name="q"
                    id="q"
                    className="py-4 px-8 w-full outline-none"
                    placeholder="Search..."
                  />
                  <button className="px-6 rounded-e-full border-s border-neutral-200 cursor-pointer hover:bg-neutral-100 transition-colors">
                    <Search />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
            {CATS.map((cat) => (
              <CategoryCard key={cat.id} img={cat.img} title={cat.title} />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-4 md:mx-16 my-8">
        <Products />
      </div>
    </>
  );
}

const CATS = [
  { id: 1, img: cat1, title: "Cloting" },
  { id: 2, img: cat2, title: "Tech" },
  { id: 3, img: cat5, title: "Beauty" },
  { id: 4, img: cat3, title: "Grocery" },
  { id: 5, img: cat4, title: "Furniture" },
];
