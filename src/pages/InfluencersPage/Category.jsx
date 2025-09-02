import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Category({ categoryOptions, label = "Influencer", onChange }) {
  return (
    <div className="w-full bg-white shadow-one rounded-lg py-4 px-5">
      <label className="block mb-2 text-sm font-medium text-text">
        {label}
      </label>

      <Select onValueChange={(value) => onChange(value)}>
        <SelectTrigger className="w-full data-[size=default]:h-11">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categoryOptions.map((ca) => (
              <SelectItem key={ca.id} value={ca.id}>
                {ca.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
