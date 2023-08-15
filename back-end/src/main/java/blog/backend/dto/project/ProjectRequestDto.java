package blog.backend.dto.project;

import blog.backend.entity.Project;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjectRequestDto {
    
    private String title;

    private String content;

    public Project toEntity(){
        return Project.builder()
            .title(title)
            .content(content)
            .build();
    }
}
