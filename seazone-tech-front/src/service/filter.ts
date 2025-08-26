
export abstract class Filter<FilterInterface> {
  constructor(protected readonly filters: FilterInterface) {}
  abstract toQuery(): URLSearchParams;
}