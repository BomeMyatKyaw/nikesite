import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className="flex items-center gap-10 justify-wrap max-xl:flex-col-reverse max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg"> 
          <span className=" text-coral-red">Special </span>
          Offers
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Embark on a shopping journy that redefines your experience with unbeatable deals. From paremier selectons to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities designed to fullfill your unique desires, surpassing the lofiest expectatons. Your journey with us is nothing short of exceptional.</p>
        <div className="flex flex-wrap justify-start gap-4 mt-11">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers