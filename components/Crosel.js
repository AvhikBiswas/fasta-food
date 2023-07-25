import { Crosel_URL } from "./constant"
function Crosel({
    creativeId
}) {

    return (
        <>
            <div class="carousel">
                <div class="carousel-slide">
                    <img class="carousel-img" src={Crosel_URL + creativeId} />
                </div>
            </div>

        </>
    );
}
export default Crosel;