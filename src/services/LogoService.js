import { URL } from "../shared/constants";

class LogoService {

    fetchLogo = (q) => {
        let url = URL.baseLogo + q;
        return fetch (url)
            .then(response => response.json())
    }

}

export const logoService = new LogoService()