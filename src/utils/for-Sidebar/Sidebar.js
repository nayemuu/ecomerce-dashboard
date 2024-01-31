export const isSectionActiveViaRoute = (pathname, subSectionRouteArray) => {
  let res = false;
  subSectionRouteArray.map((subRoute) => {
    if (pathname === subRoute) {
      return (res = res || pathname === subRoute);
    }
  });

  return res;
};
