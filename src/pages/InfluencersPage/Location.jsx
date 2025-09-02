import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Location({ locationOptions, label = "Location",onChange }) {
  return (
    <div className="w-full bg-white shadow-one rounded-lg py-4 px-5">
      <label className="block mb-2 text-sm font-medium text-text">
        {label}
      </label>

      <Select onValueChange={(value) => onChange(value)}>
        <SelectTrigger className="w-full data-[size=default]:h-11">
          <SelectValue placeholder="All Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {locationOptions.map((loc) => (
              <SelectItem key={loc.id} value={loc.id}>
                {loc.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
