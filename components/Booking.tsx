import { Button } from "./ui/button";

export function Booking() {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSe0KWH_eqCQX61aMbFfFWHCIb7R_xt5q-lTrqZPNgvqWgFWMg/viewform?usp=header";

  return (
    <section id="booking">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Book Your Adventure</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Ready to explore Georgia? Contact us to start your journey!
        </p>
        <a href={formUrl} target="_blank" rel="noopener noreferrer">
          <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 text-lg cursor-pointer hover:from-blue-700 hover:to-emerald-700">
            Book Now
          </Button>
        </a>
      </div>
    </section>
  );
}
