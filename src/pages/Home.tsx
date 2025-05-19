import Button from "../components/ui/Button";
import Image1 from "../assets/image-1.jpg";
import Image2 from "../assets/image-2.jpg";
import Products from "../components/layout/Products";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 gap-8 items-center">
        <div className="col-span-6">
          <div className="text-6xl font-bold mb-8">
            Sustainable Materials. Modern Design.
          </div>
          <div>
            <p>
              Discover curated collections that blend comfort, elegance, and
              craftsmanship. At Gelo, we believe your space should reflect your
              personality—warm, stylish, and uniquely yours.
            </p>
            <p className="mt-4">
              From cozy sofas to statement dining sets, our pieces are made to
              last and designed to impress. Whether you're furnishing a new home
              or upgrading your favorite corner, we’ve got the perfect match for
              your style.
            </p>
          </div>
          <div className="mt-8">
            <Button>View Products</Button>
            <div className="flex items-center gap-2 mt-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-map-pin-icon lucide-map-pin size-4"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>Germany ,Strobelallee 50, 44139 Dortmund</div>
            </div>
          </div>
        </div>
        <div className="col-span-6 grid grid-cols-6 gap-4">
          <img
            src={Image1}
            alt=""
            className="col-span-3 h-full object-cover rounded-t-full"
          />
          <img
            src={Image2}
            alt=""
            className="col-span-3 object-cover rounded-t-full"
          />
        </div>
      </div>

      <Products />
    </>
  );
}
