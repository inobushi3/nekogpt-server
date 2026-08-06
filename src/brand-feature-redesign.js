(() => {
  const LOGO_SRC = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAG3CAYAAABWlYYdAAAKMWlDQ1BJQ0MgUHJvZmlsZQAAeJydlndUU9kWh8+9N71QkhCKlNBraFICSA29SJEuKjEJEErAkAAiNkRUcERRkaYIMijggKNDkbEiioUBUbHrBBlE1HFwFBuWSWStGd+8ee/Nm98f935rn73P3Wfvfda6AJD8gwXCTFgJgAyhWBTh58WIjYtnYAcBDPAAA2wA4HCzs0IW+EYCmQJ82IxsmRP4F726DiD5+yrTP4zBAP+flLlZIjEAUJiM5/L42VwZF8k4PVecJbdPyZi2NE3OMErOIlmCMlaTc/IsW3z2mWUPOfMyhDwZy3PO4mXw5Nwn4405Er6MkWAZF+cI+LkyviZjg3RJhkDGb+SxGXxONgAoktwu5nNTZGwtY5IoMoIt43kA4EjJX/DSL1jMzxPLD8XOzFouEiSniBkmXFOGjZMTi+HPz03ni8XMMA43jSPiMdiZGVkc4XIAZs/8WRR5bRmyIjvYODk4MG0tbb4o1H9d/JuS93aWXoR/7hlEH/jD9ld+mQ0AsKZltdn6h21pFQBd6wFQu/2HzWAvAIqyvnUOfXEeunxeUsTiLGcrq9zcXEsBn2spL+jv+p8Of0NffM9Svt3v5WF485M4knQxQ143bmZ6pkTEyM7icPkM5p+H+B8H/nUeFhH8JL6IL5RFRMumTCBMlrVbyBOIBZlChkD4n5r4D8P+pNm5lona+BHQllgCpSEaQH4eACgqESAJe2Qr0O99C8ZHA/nNi9GZmJ37z4L+fVe4TP7IFiR/jmNHRDK4ElHO7Jr8WgI0IABFQAPqQBvoAxPABLbAEbgAD+ADAkEoiARxYDHgghSQAUQgFxSAtaAYlIKtYCeoBnWgETSDNnAYdIFj4DQ4By6By2AE3AFSMA6egCnwCsxAEISFyBAVUod0IEPIHLKFWJAb5AMFQxFQHJQIJUNCSAIVQOugUqgcqobqoWboW+godBq6AA1Dt6BRaBL6FXoHIzAJpsFasBFsBbNgTzgIjoQXwcnwMjgfLoK3wJVwA3wQ7oRPw5fgEVgKP4GnEYAQETqiizARFsJGQpF4JAkRIauQEqQCaUDakB6kH7mKSJGnyFsUBkVFMVBMlAvKHxWF4qKWoVahNqOqUQdQnag+1FXUKGoK9RFNRmuizdHO6AB0LDoZnYsuRlegm9Ad6LPoEfQ4+hUGg6FjjDGOGH9MHCYVswKzGbMb0445hRnGjGGmsVisOtYc64oNxXKwYmwxtgp7EHsSewU7jn2DI+J0cLY4X1w8TogrxFXgWnAncFdwE7gZvBLeEO+MD8Xz8MvxZfhGfA9+CD+OnyEoE4wJroRIQiphLaGS0EY4S7hLeEEkEvWITsRwooC4hlhJPEQ8TxwlviVRSGYkNimBJCFtIe0nnSLdIr0gk8lGZA9yPFlM3kJuJp8h3ye/UaAqWCoEKPAUVivUKHQqXFF4pohXNFT0VFysmK9YoXhEcUjxqRJeyUiJrcRRWqVUo3RU6YbStDJV2UY5VDlDebNyi/IF5UcULMWI4kPhUYoo+yhnKGNUhKpPZVO51HXURupZ6jgNQzOmBdBSaaW0b2iDtCkVioqdSrRKnkqNynEVKR2hG9ED6On0Mvph+nX6O1UtVU9Vvuom1TbVK6qv1eaoeajx1UrU2tVG1N6pM9R91NPUt6l3qd/TQGmYaYRr5Grs0Tir8XQObY7LHO6ckjmH59zWhDXNNCM0V2ju0xzQnNbS1vLTytKq0jqj9VSbru2hnaq9Q/uE9qQOVcdNR6CzQ+ekzmOGCsOTkc6oZPQxpnQ1df11Jbr1uoO6M3rGelF6hXrtevf0Cfos/ST9Hfq9+lMGOgYhBgUGrQa3DfGGLMMUw12G/YavjYyNYow2GHUZPTJWMw4wzjduNb5rQjZxN1lm0mByzRRjyjJNM91tetkMNrM3SzGrMRsyh80dzAXmu82HLdAWThZCiwaLG0wS05OZw2xljlrSLYMtCy27LJ9ZGVjFW22z6rf6aG1vnW7daH3HhmITaFNo02Pzq62ZLde2xvbaXPJc37mr53bPfW5nbse322N3055qH2K/wb7X/oODo4PIoc1h0tHAMdGx1vEGi8YKY21mnXdCO3k5rXY65vTW2cFZ7HzY+RcXpkuaS4vLo3nG8/jzGueNueq5clzrXaVuDLdEt71uUnddd457g/sDD30PnkeTx4SnqWeq50HPZ17WXiKvDq/XbGf2SvYpb8Tbz7vEe9CH4hPlU+1z31fPN9m31XfKz95vhd8pf7R/kP82/xsBWgHcgOaAqUDHwJWBfUGkoAVB1UEPgs2CRcE9IXBIYMj2kLvzDecL53eFgtCA0O2h98KMw5aFfR+OCQ8Lrwl/GGETURDRv4C6YMmClgWvIr0iyyLvRJlESaJ6oxWjE6Kbo1/HeMeUx0hjrWJXxl6K04gTxHXHY+Oj45vipxf6LNy5cDzBPqE44foi40V5iy4s1licvvj4EsUlnCVHEtGJMYktie85oZwGzvTSgKW1S6e4bO4u7hOeB28Hb5Lvyi/nTyS5JpUnPUp2Td6ePJninlKR8lTAFlQLnqf6p9alvk4LTduf9ik9Jr09A5eRmHFUSBGmCfsytTPzMoezzLOKs6TLnJftXDYlChI1ZUPZi7K7xTTZz9SAxESyXjKa45ZTk/MmNzr3SJ5ynjBvYLnZ8k3LJ/J9879egVrBXdFboFuwtmB0pefK+lXQqqWrelfrry5aPb7Gb82BtYS1aWt/KLQuLC98uS5mXU+RVtGaorH1futbixWKRcU3NrhsqNuI2ijYOLhp7qaqTR9LeCUXS61LK0rfb+ZuvviVzVeVX33akrRlsMyhbM9WzFbh1uvb3LcdKFcuzy8f2x6yvXMHY0fJjpc7l+y8UGFXUbeLsEuyS1oZXNldZVC1tep9dUr1SI1XTXutZu2m2te7ebuv7PHY01anVVda926vYO/Ner/6zgajhop9mH05+x42Rjf2f836urlJo6m06cN+4X7pgYgDfc2Ozc0tmi1lrXCrpHXyYMLBy994f9Pdxmyrb6e3lx4ChySHHn+b+O31w0GHe4+wjrR9Z/hdbQe1o6QT6lzeOdWV0iXtjusePhp4tLfHpafje8vv9x/TPVZzXOV42QnCiaITn07mn5w+lXXq6enk02O9S3rvnIk9c60vvG/wbNDZ8+d8z53p9+w/ed71/LELzheOXmRd7LrkcKlzwH6g4wf7HzoGHQY7hxyHui87Xe4Znjd84or7ldNXva+euxZw7dLI/JHh61HXb95IuCG9ybv56Fb6ree3c27P3FlzF3235J7SvYr7mvcbfjT9sV3qID0+6j068GDBgztj3LEnP2X/9H686CH5YcWEzkTzI9tHxyZ9Jy8/Xvh4/EnWk5mnxT8r/1z7zOTZd794/DIwFTs1/lz0/NOvm1+ov9j/0u5l73TY9P1XGa9mXpe8UX9z4C3rbf+7mHcTM7nvse8rP5h+6PkY9PHup4xPn34D94Tz+6TMXDkAAEPlJREFUeJzt3XlgFNd2wPGBKv4KNsjkkxC0CrLnGhCTtAo20qxSSCuQUiy2SiEuIBHYsqVNVRDIokrWoKIiVGwDQqJCCgJKhPwoIKitOwvIBiwbifd+zZpQCbJ5nwP34f4yU67ueebMnnnZ27Nn9lRUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWVU6CUCgCUhBRSAiAlJIdOqARASkkMmiAKAJSE5NAJ1FCGPWsEtMzvf9xzvsks8OdAxtlvpWMVk1zKbjVRRAAB08Dtjq32TVZBnVPwP8F0UMdJ3HyUrqL09J7HRFWW8G8XSfSJE2+vbti7Fu2bJl8+TJkyeSZDlz5sypW7du3XglL3muwtkYEhZWt8sbnjBcxnV/cSHOsXnBt4tl/rxt71fi3NzcfPLkyZmR0eHpCRDJJWpra73pzseuMs73kiTWUsgYLThLmBeov7ve4RsuPi1zyYxm91PK6frI/o1ZPIEHVWoJJx6rxjL/jnwGRbXnHQbhPnAMvnj3VAA4qIJ/muqTcqzq9ig8dCeSoDXjygAqo575bBwx3wGw9B4ErMrczZOaBDdhKFNdPY7pGufcMOL9kNLmXGTz9KTEWSTKiLp7do4BUOy7wQz4lJCCZdBHf4h7Fh4RKzFxBgIxiHDv+ddQEg5fYrCFlxxgCQVPjPGQu+WxNhJLj4iAn5/mNJKWW+tz2co03bk46DKsgrMPeTwFoNgH8ml6b90LhEzboZvobWH9fl/UN/DHszYiIsgn9MYcn/4+q9Iv5QtkcqfHBrGuZnrWe3rL14I4R/TIy+ACsf/EAw/HXdU2lwF07PAFszS3OyPfxv+2hjqxIW5XPK/zC3AEsYsm+wUwOIT0rq8ysBsFb4mGYCqKU85C/b1KmP++8kJoT7p/p/svn+vcGUli3WJCXs4GlBa/PdL/wtm/BrASYH4aD6WAUDFBb+N5PdvCBnFE2cw8eQP0d3Z5dvFWM6WgVcPsxr2BbE9+BWPdGeB7amJuBjis90KB7VRP51V7avJqdysacEVou7uqK02GCZHN5EaUQi/e1DYRPvlmNk/3ZwTl85+wLA2m8OQ5iXnpqBvx90M8sm2deE7yKMUgg98hlgx/tj6Rm/ya57R9ml47SVd9z70HMGcqbXuOKW6XQeMyaWtCnc7RC1c6Ch80ygsTYaivBcPDhNqByzzOYugBxSqYMS/hPOzOKxl+/vj13OAjUGYY3VG0tc+mgHmaYGkv3j+0r70oBkLv7+1Jwutuz6aOQ/+NjcUOJ+SDZ/kSGjcDAiTnjRTFGwVA0glvQ9z+f3liEG6NU/NPMEikDK5N6zWh2WX4y+RqhdFIS/zkPmH533jvqbdxo9tqivly6ILw5qzucnhaAIcTTI+bXR8CJfY12FSJN3UhREnDdXJpRMHWwTLMttkVAOcSdtSvLDNNghhNfsdUGJPzgUEsn8QrshdY1hrMv1GjCW/XA9aNOIwt43Epd0Trxbyiz/030GT9s70vH5o96ZkzmF6fAZt+NoCxxfsUHUEwBxih+8qq3VR9nz+hOqp2+9l2QWeCLeMHwFn2G6bpYk9IeyOTstjbe/DJTiDoSN4i85cJiLVrtS3z91JCpNJqv7IpgAdDKGMsi8lBbT767bvxNqCLMpa0SZl6M3WMJAPDtbN0npTBelePxUF/lDPKw1RFygcszoKDaWpLaMUghXi3eXOquowUWNZuOnnHWQX2Ce1JC+8V0TqXpJJBcTLabSuAyLnsBe+hgmQi8s3ZbsQZO0c+K1Se8MxhPCtEdYPhatALPWr56M5615ZTOUZILkBQsDTmMLACCTIcoCiLiLDkIwlJ2Nt+NSN3c+8EVn/tLKO4GIdtMHvtdzfikfakfSJHYW85EtZhwfr5tH68thY5X1rgTYNdl9EDY+o5NvknoPHBzCjthBRwgfU9KxWSON3YyKuXqVycv3XsY2ol1UXhTiVl89az0+24s//Uq3xk6s+t7DZKu5IWsLKAlVuiqo/nwZeN24c+JFAHD/hk/OgxvwZI88/J1U8gAIMBNLf6+Omzdf2FWAkpvxmhILqqq5JIQBuyehrZ3q0FKazUDk4PiLnqvlEH9CMokbnHG3K3nQHJ/Kt2wkgaaxRlZiSTQiofe/TOitRfHMwdgI8wBVEDtE+u+TudjiRiSTxPBJGlVdrOGk54rcTJFuZJrUHIZBjuqzj7/gqz/qS7gyd6Ow51gBeFQDyeDZAUcmlhPumk6XUPvxRMSKl2XrLaZJcx+shcw0Ij3EJoBcPtEYI67tdb5wC7AY4vd69IbmPm0JOv0KWKS5cYxznDJVmZ3GrF8a06z/8Op15SYAmW5IfgTuLn3u+WLJNduGLygFUDKoPs4iayTKv88w04yQTIV/kNKbffDWHRI5AoI+TNLPBcUAH7HxA1Fd1GNge0XlcsWHXV7WtdB+VJl07MzoZzqwcWsFAIJeKNhCLclqUi79cSHp/dDbSfDgwqixKoDaLK9Hl+HFYNR/TNDEzCsX6JWlx2f8A1LCJF+fedfO50RtV6iaXvlwhgPYJDi20VuPYCnvwInOjOnimkzPJYCo80bBEV4u4gAV+Ca7QQuHOJlZvmys5DlQMh/tuGiTEbcUvTFKOc+eXVsroEjMnHHvwJsOhlA9MuwcxYZhFm9mTgHDmYgs09IdYWMJw9lEyDLjdiON7e8s6sf0pQHYo/RjY+dkDdyPfcjFN0eJ2RcAQg5VyZ0trwiidXS+9fMrsmLeHd/A/HAg41WcgtyAKQDse50jd9IGz/2/D4L7PfFfLAFgIWdpotGN4dJoOowuear/d2waOdPyCZCJTs76X0zFc/rjvvKTNFk0tmUQ65aq66I/jzlPyPA92sbMnjuO0DbD1ZM52vpGHblZ4OOsWMEwwTyEj16XYzz0Mf+rRtY9YaadfBGthd/EUHrM2IaXUFnLuIL6BnH49rreQjwIBSLol03icMC5FLxaKs06d8RLW5uQTOasDQl5G7kyoBPw/SuPe9DK+4crNFcRe9AE5evzEtrzuDSpDRvDCDsBTs5GcXk/X4RJ3MCzxZhBP8CTNVizS3wLBODOHwdakATGlMyJrZzlFtDzns22SDmyrPi3Px1z6YGcZxbvEpIf2wz2B45FXpJoSl/2wMk8CXrGjVTlyW6G77whFGYYpuibIAUxe+NQ4hv1eGwXS24NrVI2jdA+oKlOs6J+C7yBm4fydKDqm3jHM7nc2Kfc/kSjh25f4WmGmZ3UteYin7zBUj4ySKhBawKP/LHJvSN+YmkwS34X4VxeeKvhfCmFK5s1JDsdLtczvrDX+BAwz2mddJjJOqKCr71lPfF/pAZ4lwM05pe6XJGrYKdapnnioAGzuPgROF0cuDWDCAsAbihorDuLSRBSLd9MBPhO/jdgZdWhT7zg5pUEPVHyeMuMU+KyzucCWGemZa5k/JTt97cmR/ZzX3NZkBsqLe0QaMGLcvviU08/pR6cYRUAWdJWea8BS30BmVPusnd4saoBFkzZsDxA+cuF+ymTItkaxga/sJ8q/05UUptlf4wdiC9aMM9MXtRqlTxBJPPB6sUJDBUKteOpifMRFSfF3GqW+ayccMcqFa7S9zeY4VP/dNusA8a7d6YE2AQFvbjD0dppT7siGDUPNkXCqsqjoqp5zUa76Yf/gufmd60QTnkS+zZb5p4Y4B3A4qx5Sx1g3WPESKFmZxSzJp4WqhvcNuhE2/HnyR2ohYrPn/+KwsSJGWmrBby/Fi0onAFFAfmcglOlNeAGQJT84Qab7nQW6bOkglph/5MmlBgZRmExMUfz6uEqC30Ei0XqDbMhbh+oeUP4PMzpzsDcr7PJaz4hXEO40z6gLFxYwFBlzzTL/oiOAk5eV03qEHk89FP9XO9NEczYQufzgzcet/f5MOeoz/YPZUJ7+kxuIIFggx+XGlTmF+STTGuAX+9TTRMPHqmF9w805y1DGhygnT2mwVzfcRjxazYY9krngXYxEH6zDk2hEpIGzu6k+aJtB9rks+nwL1p71uBvv/f15vt0h77JAxAxWTLp/Ug74Ky9+8+qNqVDE5KsT85bgxgvtRxFHchWT3yK4/ud/0cOBgF2jlrkOnOjdPvSWVD9J8zDjQ/Uyt9GRkAqjBkXzZjXl7/qrLYT9ISqGYVO7Xv9MwCFWcwf26WiEIOBM9cgciJA8WzSiD/n5JUYe57/4E03HRvPy01e3mTH5gH9DHP+yBk/g+gyYFHnxKc+kA9j1fyJPBaivTxWcCLBQYdVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVvSn+A5ehqaTFQ5fWAAAAAElFTkSuQmCC';

  const PARTS = {
    background: [0, 1].map((i) => `./assets/redesign/v3/background/part-0${i}.txt`),
  };

  const cache = new Map();

  const asset = (name, mime = 'image/webp') => {
    if (cache.has(name)) return cache.get(name);
    const promise = Promise.all(PARTS[name].map(async (url) => {
      const response = await fetch(url, { cache: 'force-cache' });
      if (!response.ok) throw new Error(`Falha ao carregar ${url}`);
      return response.text();
    })).then((parts) => {
      const raw = atob(parts.join('').replace(/\s+/g, ''));
      const bytes = Uint8Array.from(raw, (char) => char.charCodeAt(0));
      return URL.createObjectURL(new Blob([bytes], { type: mime }));
    });
    cache.set(name, promise);
    return promise;
  };

  const css = `
    .site-header .nav-shell {
      min-height: 92px;
    }

    .site-header .brand.nekogpt-brand-logo {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: flex-start !important;
      width: auto !important;
      min-width: clamp(190px, 18vw, 290px) !important;
      height: 84px !important;
      padding: 0 !important;
      border: 0 !important;
      background: transparent !important;
      box-shadow: none !important;
      overflow: visible !important;
      text-decoration: none !important;
    }

    .site-header .brand.nekogpt-brand-logo img {
      display: block !important;
      width: clamp(185px, 15vw, 265px) !important;
      height: auto !important;
      max-height: 82px !important;
      object-fit: contain !important;
      object-position: left center !important;
      border: 0 !important;
      border-radius: 0 !important;
      background: transparent !important;
      box-shadow: none !important;
      image-rendering: auto !important;
      filter: drop-shadow(0 6px 14px rgba(255, 130, 190, .18)) !important;
    }

    .nekogpt-video-character img {
      filter: none !important;
      image-rendering: auto !important;
      backface-visibility: hidden;
      transform-style: preserve-3d;
    }

    .nekogpt-video-character--left img {
      max-height: 500px !important;
      width: auto !important;
    }

    .nekogpt-video-character--right img {
      max-height: 520px !important;
      width: auto !important;
    }

    #features .feature-grid.nekogpt-one-box {
      display: block;
      width: 100%;
      perspective: 1600px;
    }

    .nekogpt-feature-shell {
      position: relative;
      width: min(100%, 1220px);
      margin: 0 auto;
      padding: 18px 12px 48px;
      perspective: 1600px;
    }

    .nekogpt-feature-shell::after {
      content: '';
      position: absolute;
      left: 8%;
      right: 8%;
      bottom: 12px;
      height: 56px;
      border-radius: 50%;
      background: rgba(0, 0, 0, .48);
      filter: blur(32px);
      pointer-events: none;
    }

    .nekogpt-feature-stage {
      --rx: 0deg;
      --ry: 0deg;
      --sx: 50%;
      --sy: 25%;
      position: relative;
      isolation: isolate;
      overflow: hidden;
      min-height: 630px;
      padding: clamp(30px, 4vw, 58px);
      border: 1px solid rgba(255, 255, 255, .92);
      border-radius: 30px;
      background-image:
        linear-gradient(135deg, rgba(255,255,255,.42), rgba(255,248,245,.14)),
        var(--paper);
      background-size: cover;
      background-position: center;
      box-shadow:
        0 42px 90px rgba(0, 0, 0, .5),
        0 12px 0 -4px rgba(207,174,193,.72),
        0 20px 0 -8px rgba(114,87,126,.32),
        inset 0 1px 0 #fff;
      transform: rotateX(var(--rx)) rotateY(var(--ry));
      transform-style: preserve-3d;
      transition: transform .16s ease-out, box-shadow .2s ease;
      will-change: transform;
    }

    .nekogpt-feature-stage::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background:
        radial-gradient(circle at var(--sx) var(--sy), rgba(255,255,255,.9), transparent 25%),
        linear-gradient(120deg, rgba(255,255,255,.24), transparent 38%, rgba(239,191,221,.14) 75%, transparent);
      mix-blend-mode: screen;
      opacity: .55;
      pointer-events: none;
    }

    .nekogpt-feature-stage::after {
      content: '';
      position: absolute;
      inset: 12px;
      z-index: -1;
      border: 1px solid rgba(163,124,151,.22);
      border-radius: 22px;
      box-shadow: inset 0 0 40px rgba(255,255,255,.3);
      pointer-events: none;
    }

    .nekogpt-feature-stage.tilting {
      box-shadow:
        0 55px 110px rgba(0,0,0,.56),
        0 14px 0 -4px rgba(207,174,193,.72),
        0 24px 0 -8px rgba(114,87,126,.32),
        inset 0 1px 0 #fff;
    }

    .nekogpt-feature-items {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      transform: translateZ(44px);
      transform-style: preserve-3d;
    }

    .nekogpt-feature-item {
      min-height: 245px;
      padding: 28px clamp(20px, 3vw, 36px) !important;
      background: transparent !important;
      border: 0 !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      color: #2d2632 !important;
      transform: none !important;
    }

    .nekogpt-feature-item:nth-child(-n + 3) {
      border-bottom: 1px solid rgba(103,82,107,.18) !important;
    }

    .nekogpt-feature-item:not(:nth-child(3n)) {
      border-right: 1px solid rgba(103,82,107,.18) !important;
    }

    .nekogpt-feature-item::before {
      display: none !important;
    }

    .nekogpt-feature-item .feature-icon {
      width: 50px;
      height: 50px;
      margin-bottom: 18px;
      border: 1px solid rgba(255,255,255,.84);
      border-radius: 15px;
      background: linear-gradient(145deg, rgba(255,255,255,.9), rgba(255,235,247,.65));
      color: #7163ff;
      box-shadow: 0 10px 24px rgba(89,58,93,.12), inset 0 1px 0 #fff;
      transform: translateZ(18px);
    }

    .nekogpt-feature-item h3 {
      margin: 0 0 10px;
      color: #2c2431 !important;
      font-size: clamp(1.04rem, 1.35vw, 1.2rem);
      line-height: 1.35;
      text-shadow: 0 1px 0 rgba(255,255,255,.75);
    }

    .nekogpt-feature-item p {
      margin: 0;
      color: #655d69 !important;
      font-size: .98rem;
      line-height: 1.62;
    }

    .nekogpt-feature-item .live2d-feature-icon img,
    .nekogpt-feature-item .minecraft-feature-icon img {
      filter: none;
    }

    @media (max-width: 1020px) {
      .nekogpt-feature-items {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .nekogpt-feature-item {
        border-right: 0 !important;
      }

      .nekogpt-feature-item:nth-child(-n + 4) {
        border-bottom: 1px solid rgba(103,82,107,.18) !important;
      }

      .nekogpt-feature-item:nth-child(odd) {
        border-right: 1px solid rgba(103,82,107,.18) !important;
      }
    }

    @media (max-width: 760px) {
      .site-header .nav-shell {
        min-height: 76px;
      }

      .site-header .brand.nekogpt-brand-logo {
        min-width: 155px !important;
        height: 64px !important;
      }

      .site-header .brand.nekogpt-brand-logo img {
        width: 150px !important;
        max-height: 60px !important;
      }

      .nekogpt-feature-shell {
        padding: 8px 0 28px;
      }

      .nekogpt-feature-stage {
        min-height: 0;
        padding: 22px 20px;
        border-radius: 24px;
        transform: none !important;
      }

      .nekogpt-feature-stage::after {
        inset: 8px;
        border-radius: 18px;
      }

      .nekogpt-feature-items {
        grid-template-columns: 1fr;
        transform: none;
      }

      .nekogpt-feature-item {
        min-height: 0;
        padding: 25px 8px !important;
        border-right: 0 !important;
        border-bottom: 1px solid rgba(103,82,107,.18) !important;
      }

      .nekogpt-feature-item:last-child {
        border-bottom: 0 !important;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .nekogpt-feature-stage {
        transform: none !important;
        transition: none;
      }
    }
  `;

  const style = () => {
    if (document.getElementById('nekogpt-redesign-final-css')) return;
    const styleEl = document.createElement('style');
    styleEl.id = 'nekogpt-redesign-final-css';
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
  };

  const brand = () => {
    const el = document.querySelector('.site-header .brand');
    if (!el) return false;
    if (el.classList.contains('nekogpt-brand-logo') && el.querySelector('img[data-nekogpt-logo="v2"]')) return true;

    el.classList.add('nekogpt-brand-logo');
    el.setAttribute('aria-label', 'NekoGPT');
    el.replaceChildren();

    const img = document.createElement('img');
    img.src = LOGO_SRC;
    img.alt = 'NekoGPT';
    img.decoding = 'async';
    img.draggable = false;
    img.dataset.nekogptLogo = 'v2';
    el.appendChild(img);
    return true;
  };

  const features = async () => {
    const grid = document.querySelector('#features .feature-grid');
    if (!grid) return false;
    if (grid.classList.contains('nekogpt-one-box')) return true;

    const cards = [...grid.querySelectorAll(':scope > .feature-card')];
    if (cards.length < 6) return false;

    const bg = await asset('background');
    const shell = document.createElement('div');
    shell.className = 'nekogpt-feature-shell';

    const stage = document.createElement('div');
    stage.className = 'nekogpt-feature-stage';
    stage.style.setProperty('--paper', `url("${bg}")`);

    const items = document.createElement('div');
    items.className = 'nekogpt-feature-items';

    cards.forEach((card) => {
      card.classList.add('nekogpt-feature-item');
      items.appendChild(card);
    });

    stage.appendChild(items);
    shell.appendChild(stage);
    grid.replaceChildren(shell);
    grid.classList.add('nekogpt-one-box');

    const reset = () => {
      stage.style.setProperty('--rx', '0deg');
      stage.style.setProperty('--ry', '0deg');
      stage.classList.remove('tilting');
    };

    stage.addEventListener('pointermove', (event) => {
      if (matchMedia('(max-width:760px)').matches) return;
      const rect = stage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      stage.style.setProperty('--ry', `${(x - .5) * 8}deg`);
      stage.style.setProperty('--rx', `${(.5 - y) * 6}deg`);
      stage.style.setProperty('--sx', `${x * 100}%`);
      stage.style.setProperty('--sy', `${y * 100}%`);
      stage.classList.add('tilting');
    });

    stage.addEventListener('pointerleave', reset);
    stage.addEventListener('pointercancel', reset);
    return true;
  };

  const run = () => {
    style();
    brand();
    features().catch(console.error);
  };

  run();
  document.addEventListener('DOMContentLoaded', run, { once: true });

  let attempts = 0;
  const timer = setInterval(() => {
    attempts += 1;
    run();
    if ((document.querySelector('.nekogpt-brand-logo img[data-nekogpt-logo="v2"]') && document.querySelector('.nekogpt-one-box')) || attempts >= 40) {
      clearInterval(timer);
    }
  }, 250);
})();
